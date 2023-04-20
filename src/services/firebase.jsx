import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyBd8U_OFhbgz38zDvRgdqcT2gz7Z6ufk8E",
            authDomain: "activity-buddies.firebaseapp.com",
            projectId: "activity-buddies",
            storageBucket: "activity-buddies.appspot.com",
            messagingSenderId: "751467199082",
            appId: "1:751467199082:web:b7fb47a669e0f814586813",
            measurementId: "G-PEZ6LW2SZC",
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}