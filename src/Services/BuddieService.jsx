import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../Config/firebase";

export const findAllBuddies = () => {
  return;
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

  const alreadyRequested = requestSnapshot.docs.some((doc) => {
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
      }
    );
    return true;
  }
};
