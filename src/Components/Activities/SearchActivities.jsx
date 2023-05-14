import React, { useEffect, useState } from "react";
// import Modal from "../../Utils/Modal";
import Activity from "./Activity";
// import Button from "../../Utils/Button";
import FilterSection from "./FilterActivities";
import {
  retrieveUserActivities,
  deleteActivity,
} from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";

const SearchActivities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [isSearchPage, setIsSearchPage] = useState(false);
  const { user } = UserAuth();

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

  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <h1 className="font-bold text-2xl mb-10 mt-10">
          Best activities around Birmingham
        </h1>
        <FilterSection onFilterChange={handleFilterChange} />
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, i) => (
            <Activity
              key={i}
              activity={activity}
              deleteActivity={deleteActivity}
              creator={true}
              isSearchPage={isSearchPage}
            />
          ))
        ) : allActivities ? (
          allActivities.map((activity, i) => (
            <Activity
              key={i}
              activity={activity}
              deleteActivity={deleteActivity}
              creator={true}
              isSearchPage={isSearchPage}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 py-4 my-2 justify-center align-center content-center items-center">
          <div className="flex">
            <img
              src="../public/img/activity.jpg"
              alt="activity"
              className="flex my-2 rounded-lg max-h-[250px]"
            />
          </div>
          <div className="flex-row">
            <h3 className="font-bold text-2xl mb-4">Meeting to code!</h3>
            <div>
              Come join us in an amazing coding session where you will learn how
              to become the master zen of all coding languages!
            </div>
            <span className="justify-items-auto"></span>
            <div className="mt-4">
              <p className="font-bold">Event will take place at on: </p>
              <div>27 March at 21:00</div>
              <div className="mt-4">
                <span className="font-bold">Location: </span>
                <div>
                  5th Floor, Centre City House, 5, 7 Hill St, Birmingham B5 4UA
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img src="../public/img/profile-picture.jpg" />
            </div>
            <p className="mb-2">Constantin Cristian Florea</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p> 1 day, 22 hours</p>
            <div className="font-bold">7/10 Attenders</div>
            <button
              type="submit"
              className="right-0 text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActivities;
