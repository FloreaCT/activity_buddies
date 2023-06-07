import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../Config/firebase";

export const findAllBuddies = async (user) => {
  const buddies = [];

  const buddiesQuery = await getDocs(
    collection(db, "users", user.uid, "friends")
  );

  buddiesQuery.forEach((doc) => {
    buddies.push(doc.data());
  });

  return buddies;
};

export const buddiesRequest = async (user) => {
  const requests = [];
  const userQuery = await getDocs(
    collection(db, "users", user.uid, "friendRequests")
  );

  userQuery.forEach((doc) => {
    const request = doc.data();
    if (request.status !== "accepted" && request.status !== "blocked") {
      requests.push(request);
    }
  });

  return requests;
};

export const searchBuddy = async (email) => {
  const buddyQuery = query(
    collection(db, "users"),
    where("basicinfo.email", "==", email)
  );
  const buddySnapshot = await getDocs(buddyQuery);

  if (buddySnapshot.empty) {
    return false;
  } else {
    const { avatar, basicinfo, education, uid } = buddySnapshot.docs.map(
      (doc) => doc.data()
    )[0];

    const buddy = {
      avatar: avatar,
      name: basicinfo.firstName + " " + basicinfo.lastName,
      university: education.university,
      uid: uid,
    };
    return buddy;
  }
};

export const sendBuddyRequest = async (buddy, sender) => {
  const requestSnapshot = await getDocs(
    collection(db, "users", buddy.uid, "friendRequests"),
    where("senderId", "==", sender.uid)
  );

  const alreadyRequested = requestSnapshot.docs.find((doc) => {
    return doc.id === buddy.uid + sender.uid;
  });
  if (alreadyRequested) {
    return false;
  } else {
    await setDoc(
      doc(db, "users", buddy.uid, "friendRequests", buddy.uid + sender.uid),
      {
        senderId: sender.uid,
        name: sender.name,
        status: "pending",
      }
    );
    return true;
  }
};

export const acceptFriend = async (user, buddy, accepted) => {
  const userSnapshot = doc(db, "users", user.uid);
  const newFriend = doc(db, "users", buddy);

  const newFriendSnap = await getDoc(newFriend);
  const newFriendData = newFriendSnap.data();

  const friend = {
    displayName:
      newFriendData.basicinfo.firstName +
      " " +
      newFriendData.basicinfo.lastName,
    photoURL: newFriendData.photoURL,
    uid: newFriendData.uid,
    university: newFriendData.education.university,
    email: newFriendData.basicinfo.email,
  };

  const setNewFriend = await setDoc(
    doc(userSnapshot, "friends", newFriendData.uid),
    friend
  );

  const yourFriendSnap = await getDoc(userSnapshot);
  const yourFriendData = yourFriendSnap.data();

  const yourFriend = {
    displayName:
      yourFriendData.basicinfo.firstName +
      " " +
      yourFriendData.basicinfo.lastName,
    photoURL: yourFriendData.photoURL,
    uid: yourFriendData.uid,
    university: yourFriendData.education.university,
    email: yourFriendData.basicinfo.email,
  };

  const setYourFriend = await setDoc(
    doc(newFriend, "friends", user.uid),
    yourFriend
  );

  const requestSnapshot = await getDocs(
    collection(db, "users", user.uid, "friendRequests"),
    where("senderId", "==", buddy)
  );

  await updateDoc(
    doc(db, "users", user.uid, "friendRequests", requestSnapshot.docs[0].id),
    {
      status: "accepted",
    }
  );

  accepted();
};

export const deleteBuddy = async (user, buddy, accepted) => {
  const userRef = doc(db, "users", user);
  // const userRefSnap = await getDoc(userRef);
  const friendsRef = collection(userRef, "friends");

  // Get a reference to the friend document with the specified uid
  const friendRef = doc(friendsRef, buddy);

  // Delete the friend document
  deleteDoc(friendRef)
    .then(() => {
      console.log("Buddy deleted from your friend list");
    })
    .catch((error) => {
      console.error("Error deleting friend: ", error);
    });

  const friendRequestsRef = collection(userRef, "friendRequests");
  const friendRequestRef = doc(friendRequestsRef, user + buddy);

  deleteDoc(friendRequestRef)
    .then(() => {
      console.log("Buddy friend request deleted from your friend list");
    })
    .catch((error) => {
      console.error("Error deleting friend request: ", error);
    });

  const buddyRef = doc(db, "users", buddy);
  const buddyFriendsRef = collection(buddyRef, "friends");

  // Get a reference to the friend document with the specified uid
  const buddyFriendRef = doc(buddyFriendsRef, user);

  // Delete the friend document
  deleteDoc(buddyFriendRef)
    .then(() => {
      console.log("You've been removed from your buddy friend list");
    })
    .catch((error) => {
      console.error("Error deleting friend: ", error);
    });

  accepted();
};

export const blockBuddy = async (user, buddy, accepted) => {
  await updateDoc(doc(db, "users", user, "friendRequests", user + buddy), {
    status: "blocked",
  });

  accepted();
};
