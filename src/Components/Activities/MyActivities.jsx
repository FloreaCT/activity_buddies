import React, { useEffect, useState } from "react";
import Modal from "../../Utils/Modal";
import Activity from "./Activity";
import Button from "../../Utils/Button";
import FilterSection from "./FilterActivities";
import { retrieveUserActivities } from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";
const MyActivities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [show, setShow] = useState(false);
  const { user, dbUser } = UserAuth();
  console.log(dbUser);
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

  useEffect(() => {
    setFilteredActivities(allActivities);
  }, [allActivities]);

  const handleFilterChange = (filter) => {
    const filtered = allActivities.filter((activity) => {
      const filterActivity = filter.activity.toLowerCase().trim();
      const filterLocation = filter.location.toLowerCase().trim();
      // const filterDate = filter.date.trim(); To be added later
      const locationText = activity.location.toLowerCase();
      // const dateText = activity.date; To be added later
      const tagMatches = activity.tags.some((tag) => {
        const tagText = tag.toLowerCase();
        return tagText.slice(0, 3) === filterActivity.slice(0, 3);
      });
      const locationMatches =
        filterLocation === "" ||
        locationText.slice(0, 3) === filterLocation.slice(0, 3);
      // const dateMatches = filterDate === "" || dateText === filterDate; //To be added later
      return filterActivity === ""
        ? locationMatches
        : tagMatches && locationMatches;
    });
    setFilteredActivities(filtered);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
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
        <FilterSection onFilterChange={handleFilterChange} />
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, i) => (
            <Activity key={i} activity={activity} />
          ))
        ) : allActivities ? (
          allActivities.map((activity, i) => (
            <Activity key={i} activity={activity} />
          ))
        ) : (
          <div>Loading...</div>
        )}
        <Modal open={show} onClose={handleModalClose} register={"activity"} />
      </div>
    </div>
  );
};
export default MyActivities;
