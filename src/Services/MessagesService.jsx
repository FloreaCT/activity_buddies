import {
  getDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  query,
  collection,
  serverTimestamp,
  getDocsFromServer,
} from "firebase/firestore";
import { db } from "../Config/firebase";
import { auth } from "../Config/firebase";

export const searchFriend = async (username) => {
  const q = query(collection(db, "users", auth.currentUser.uid, "friends"));

  const foundFriends = [];
  const querySnapshot = await getDocsFromServer(q);
  querySnapshot.forEach((doc) => {
    const name = doc.data().displayName;
    if (name.toUpperCase().includes(username.toUpperCase())) {
      foundFriends.push(doc.data());
    }
  });
  return foundFriends;
};

export const handleChats = async (chatUser) => {
  const combinedId =
    auth.currentUser.uid > chatUser.uid
      ? auth.currentUser.uid + chatUser.uid
      : chatUser.uid + auth.currentUser.uid;

  try {
    const res = await getDoc(doc(db, "chats", combinedId));

    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), { messages: [] });

      //create user chats
      await updateDoc(doc(db, "userChats", auth.currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: chatUser.uid,
          displayName: chatUser.displayName,
          photoURL: chatUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", chatUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
