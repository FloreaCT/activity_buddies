import {
  doc,
  setDoc,
  collection,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Config/firebase";

export const addActivity = async (formData, dbUser) => {
  const modifiedActivitiy = {
    ...formData,
    creator: {
      profileImage: dbUser.avatar,
      name: dbUser.basicinfo.firstName + " " + dbUser.basicinfo.lastName,
      id: `${dbUser.uid}`,
    },
  };

  const newActivity = doc(collection(db, "activities"));
  const setActivity = await setDoc(newActivity, modifiedActivitiy);
  console.log("Activity has been saved to the database");
};

export const retrieveUserActivities = async (callback, user) => {

  const activitiesRef = collection(db, "activities");
  const userActivities = query(
    activitiesRef,
    where("creator.id", "==", user.uid)
  );
  const unsubscribe = onSnapshot(userActivities, (snapshot) => {
    const allActivities = snapshot.docs.map((doc) => {
      const { date, ...data } = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    });
    callback(allActivities);
  });
  return () => {
    unsubscribe();
  };
};

export const updateActivity = async () => {

};

export const deleteActivity = async () => {};
