import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../Config/firebase";

// Define function to retrieve user profile data from Firestore
export const retrieveProfile = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

// Define function to create a new user in Firestore
export const createSyncedUser = async (userData, register, uid) => {
  const newUser = await setDoc(doc(db, "users", register ? uid : userData.id), {
    about: "Please write something amazing about you",
    photoURL: register ? userData.photoURL : "/img/profile-picture.jpg",
    basicinfo: {
      birthday: "Please set your birthday",
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: register ? userData.phone : "Please set your phone",
      gender: "Please set your gender",
      email: userData.email,
    },
    interests: ["Please", "Add", "Some", "Interests"],
    education: {
      university: register ? userData.university : "Please set your university",
      course: "Please set your course",
      year: 0,
      classroom: 0,
    },
    location: {
      city: "Please add your city",
      county: "county",
      postcode: "and postcode",
    },
    uid: register ? uid : userData.id,
  });
  // Creating new user chat collection

  const newUserChat = await setDoc(
    doc(db, "userChats", register ? uid : userData.id),
    {}
  );

  const snapshot = await getDoc(doc(db, "users", register ? uid : userData.id));
  if (snapshot) {
    // Creating the userChats collection
    return true;
  }
};

// Define function to verify if a user already exists in Firestore
export const verifyExistingUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

// Define function to update user profile data in Firestore
export const updateProfile = async (newData) => {
  const uid = auth.currentUser.uid;
  const docRef = doc(db, "users", uid);
  const data = newData;

  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
