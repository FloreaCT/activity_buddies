import React, { useEffect, useState } from "react";
import Modal from "../../Utils/Modal";
import Activity from "./Activity";

const MyActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities([
      {
        title: "My activity",
        image: "../public/img/activity.jpg",
        description: "My description",
        date: "Today",
        time: "Now",
        location: "Everywhere",
        attendees: 10,
        maxAttendees: 10,
        timeLeft: "2 days 1h",
        creator: {
          profileImage: "../../public/img/profile-picture.jpg",
          name: "Cristian",
        },
      },
      {
        title: "My other activity",
        image: "../public/img/activity.jpg",
        description: "My best description",
        date: "Tomorrow",
        time: "20:30",
        location: "Solihull",
        attendees: 10,
        maxAttendees: 20,
        timeLeft: "2 days 1h",
        creator: {
          profileImage: "../../public/img/profile-picture.jpg",
          name: "Cristian",
        },
      },
    ]);
  }, []);

  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <h1 className="font-bold text-2xl mb-10 mt-10">Your activities</h1>
        {activities ? (
          activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
              isSearchPage={true}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
        <Modal />
      </div>
    </div>
  );
};

export default MyActivities;
