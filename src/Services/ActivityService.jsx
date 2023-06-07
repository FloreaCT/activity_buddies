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
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import { db, storageRef } from "../Config/firebase";
import { deleteObject, ref } from "firebase/storage";

//Exporting function to add a new activity
export const addActivity = async (formData, dbUser) => {
  const modifiedActivitiy = {
    ...formData,
    creator: {
      profileImage: dbUser.photoURL,
      name: dbUser.basicinfo.firstName + " " + dbUser.basicinfo.lastName,
      id: `${dbUser.uid}`,
    },
  };
  //Adding the activity to the database
  const newActivity = doc(collection(db, "activities"));
  const setActivity = await setDoc(newActivity, modifiedActivitiy);
  console.log("Activity has been saved to the database");
};

export const retrieveAllActivities = async () => {
  const activitiesRef = collection(db, "activities");
  const activitiesSnapshot = await getDocs(activitiesRef);
  const activities = activitiesSnapshot.docs.map((doc) => {
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
  return activities;
};

//Exporting function to retrieve all activities of the logged in user
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

//Exporting function that updates an existing activity
export const updateActivity = async (data, activityId) => {
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
    //Getting the image file name from the firebase url
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

// Add user attendace
export const joinActivity = async (userId, activityId, setAllActivities) => {
  const userRef = doc(db, "users", userId);

  // Get a reference to the activity document
  const activityRef = doc(db, "activities", activityId);

  await updateDoc(activityRef, {
    attendees: increment(1),
  });

  // Add the activity to the user's attendances subcollection
  await setDoc(doc(userRef, "attendances", activityId), {
    activityRef: activityRef,
  });

  // Retrieve all activities from Firestore and update the state variable
  const updatedActivities = await retrieveAllActivities();
  setAllActivities(updatedActivities);
};

// Check which activities an user is attending
export const userAttendance = async (userId) => {
  const subcollectionRef = collection(db, "users", userId, "attendances");
  const subcollectionSnapshot = await getDocs(subcollectionRef);
  const activityIds = subcollectionSnapshot.docs.map((doc) => doc.id);

  const activityDocs = await Promise.all(
    activityIds.map((activityId) => getDoc(doc(db, "activities", activityId)))
  );

  const activities = activityDocs.map((doc) => {
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
  return activities;
};

//Remove user from activity

export const removeAttendance = async (userId, activityId) => {
  // Get the user document and the activity document
  const userDocRef = doc(db, "users", userId);
  const activityDocRef = doc(db, "activities", activityId);
  const [userDoc, activityDoc] = await Promise.all([
    getDoc(userDocRef),
    getDoc(activityDocRef),
  ]);

  // Query the attendances subcollection to get the attendance document ID for the given activity
  const attendancesQuery = query(
    collection(db, "users", userId, "attendances"),
    where("activityRef", "==", activityDocRef)
  );
  const attendancesDocs = await getDocs(attendancesQuery);
  const attendanceDoc = attendancesDocs.docs[0];

  // Create a batched write to remove the attendance from the user document and decrement the number of attendees from the activity document
  const batchedWrite = writeBatch(db);
  batchedWrite.delete(attendanceDoc.ref);
  batchedWrite.update(activityDocRef, {
    attendees: activityDoc.data().attendees - 1,
  });
  batchedWrite.update(userDocRef, {
    attendances: attendancesDocs.docs
      .filter((doc) => doc.id !== attendanceDoc.id)
      .map((doc) => doc.ref),
  });

  // Commit the batched write
  await batchedWrite.commit();
};
