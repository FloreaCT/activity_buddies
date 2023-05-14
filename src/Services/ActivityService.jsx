import {
  doc,
  setDoc,
  collection,
  getDoc,
  onSnapshot,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storageRef } from "../Config/firebase";
import { deleteObject, ref } from "firebase/storage";

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
      // Converting the timestamp into day/month/year
      const dateObj = date ? new Date(date.seconds * 1000) : null; // convert date to Date object
      const day = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "short" }); // add 1 because getMonth returns 0-based index
      const year = dateObj.getFullYear();
      return {
        id: doc.id,
        date: `${day} ${month} ${year}`,
        ...data,
      };
    });
    callback(allActivities);
  });
  return () => {
    unsubscribe();
  };
};

export const updateActivity = async (data, activityId) => {
  console.log("data is: ", data);
  try {
    const activityRef = doc(db, "activities", activityId);
    await updateDoc(activityRef, data);
    console.log("Activity updated successfully!");
  } catch (error) {
    console.error("Error updating activity: ", error);
  }
};
export const deleteActivity = async (activityId, imageUrl) => {
  // Delete the image file from Firebase Storage
  try {
    const decodedUrl = decodeURIComponent(imageUrl);

    const filePath = decodedUrl
      .split(storageRef.storage.app.options.storageBucket)[1]
      .split("?")[0];
    const imagePath = filePath.replace("/o/images/", "");
    const imageRef = ref(storageRef, imagePath);

    await deleteObject(imageRef);

    // Delete the activity document from Firebase Firestore
    const activityRef = doc(db, "activities", activityId);
    await deleteDoc(activityRef);
  } catch (e) {
    console.error("Error while trying to delete image: ", e);
  }
};
