import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd8U_OFhbgz38zDvRgdqcT2gz7Z6ufk8E",
  authDomain: "activity-buddies.firebaseapp.com",
  projectId: "activity-buddies",
  storageBucket: "activity-buddies.appspot.com",
  messagingSenderId: "751467199082",
  appId: "1:751467199082:web:b7fb47a669e0f814586813",
  measurementId: "G-PEZ6LW2SZC",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const querySnapshot = await getDocs(collection(db, "activities"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

export default app;
