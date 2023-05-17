import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import FilterSection from "./FilterActivities";
import {
  retrieveAllActivities,
  deleteActivity,
} from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";

const SearchActivities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [isSearchPage, setIsSearchPage] = useState(false);
  const { user } = UserAuth();
  useEffect(() => {
    const handleActivitiesUpdate = async () => {
      const activities = await retrieveAllActivities();
      setAllActivities(activities);
    };
    if (user && user.uid) {
      const unsubscribe = handleActivitiesUpdate(retrieveAllActivities());
      return () => {
        unsubscribe;
      };
    }
  }, [user]);

  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await retrieveAllActivities();
      setAllActivities(activities);
    };
    fetchActivities();
  }, []);

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
              setAllActivities={setAllActivities}
            />
          ))
        ) : allActivities ? (
          console.log("From SearchActivities.jsx")
        ) : (
          // allActivities.map((activity, i) => (
          //   <Activity
          //     key={i}
          //     activity={activity}
          //     deleteActivity={deleteActivity}
          //     creator={true}
          //     isSearchPage={isSearchPage}
          //   />
          // ))
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SearchActivities;
