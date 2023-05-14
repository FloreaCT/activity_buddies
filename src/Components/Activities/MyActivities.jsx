import React, { useEffect, useState } from "react";
import Modal from "../../Utils/Modal";
import Activity from "./Activity";
import Button from "../../Utils/Button";
import {
  retrieveUserActivities,
  deleteActivity,
} from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";

// Rendering the user's activities page
const MyActivities = () => {
  // Define state variables for all activities and modal visibility
  const [allActivities, setAllActivities] = useState([]);
  const [show, setShow] = useState(false);
  // Get the current user using the UserAuth hook
  const { user } = UserAuth();

  // Set the creator flag to false
  const creator = false;

  // Use an effect hook to retrieve the user's activities from the database
  useEffect(() => {
    const handleActivitiesUpdate = (activities) => {
      setAllActivities(activities);
    };
    if (user && user.uid) {
      const unsubscribe = retrieveUserActivities(handleActivitiesUpdate, user);
      return () => {
        unsubscribe;
      };
    }
  }, [user]);

  // Define a function to handle closing the modal
  const handleModalClose = () => {
    setShow(false);
  };

  // Render the user's activities page
  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      {/* Render Create activity button */}
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <h1 className="font-bold text-2xl mb-10 mt-10">Your activities</h1>
        <Button
          type={"button"}
          text={"Create activity"}
          buttonStyles={
            "text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm mb-4 px-4 py-2"
          }
          onClick={() => setShow(true)}
        />
        {/* Render user's activities */}
        {allActivities ? (
          allActivities.map((activity, i) => (
            <Activity
              key={i}
              activity={activity}
              deleteActivity={deleteActivity}
              creator={creator}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
        {/* Render the modal for creating/editing activities */}
        <Modal
          open={show}
          onClose={handleModalClose}
          register={"activity"}
          creator={creator}
        />
      </div>
    </div>
  );
};

// Export the MyActivities component
export default MyActivities;
