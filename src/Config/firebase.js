// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8U_OFhbgz38zDvRgdqcT2gz7Z6ufk8E",
  authDomain: "activity-buddies.firebaseapp.com",
  databaseURL:
    "https://activity-buddies-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "activity-buddies",
  storageBucket: "activity-buddies.appspot.com",
  messagingSenderId: "751467199082",
  appId: "1:751467199082:web:b7fb47a669e0f814586813",
  measurementId: "G-PEZ6LW2SZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "Activity Buddies");

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
