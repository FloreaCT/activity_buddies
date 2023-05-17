import { useEffect, useState } from "react";
import { UserAuth } from "../../Auth/AuthContext";
import {
  userAttendance,
  removeAttendance,
} from "../../Services/ActivityService";
import Activity from "./Activity";
// Define a component for rendering the attending activities page
const AttendingActivities = () => {
  const [activities, setActivities] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await userAttendance(user.uid);
      setActivities(items);
    };
    if (user && user.uid) {
      const unsubscribe = () => {
        fetchItems();
      };
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const handleWithdraw = async (activityId) => {
    try {
      await removeAttendance(user.uid, activityId);
      console.log("Attendance removed successfully!");
      // Update the activities state when the user withdraws from an activity
      setActivities(
        activities.filter((activity) => activity.id !== activityId)
      );
    } catch (error) {
      console.error("Error removing attendance: ", error);
    }
  };

  return (
    // Render a container div with a flex layout and some styling
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      {/* Render activity details */}
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <h1 className="font-bold text-2xl my-2">Attending activities</h1>
        <hr className="w-[20%] h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-6 dark:bg-gray-700"></hr>
        {activities ? (
          activities.map((activity, i) => (
            <Activity
              key={i}
              activity={activity}
              attending={true}
              handleWithdraw={handleWithdraw}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default AttendingActivities;
