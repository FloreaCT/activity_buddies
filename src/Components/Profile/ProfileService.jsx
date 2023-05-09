import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";
import { UserAuth } from "../../Auth/AuthContext";

export const retrieveProfile = async () => {
  const docRef = doc(db, "users", "TKjX4V8R5XyB2AqQuZsl");
  const docSnap = await getDoc(docRef);
  return docSnap;
};

export const createUser = async (userData) => {
  const { user } = UserAuth();

  const newUser = await setDoc(doc(db, "users", user.uid), {
    userData,
  });
};

export const verifyExistingUser = async (userData) => {
  
};
