import React, { useEffect, useState } from "react";
import Button from "../../Utils/Button";
import Modal from "../../Utils/Modal";
import { joinActivity, removeAttendance } from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";

const Activity = ({
  activity,
  isSearchPage,
  deleteActivity,
  creator,
  setAllActivities,
  attending,
  handleWithdraw,
}) => {
  const [isAttending, setIsAttending] = useState(false);
  const [attendingActivities, setAttendingActivities] = useState([]);
  const [show, setShow] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    // Update the attendingActivities state when the component mounts and when the user state changes
    if (user && user.attendances) {
      setAttendingActivities(
        user.attendances.map((attendance) => attendance.activityRef.id)
      );
    } else {
      setAttendingActivities([]);
    }
  }, [user]);

  useEffect(() => {
    // Update the isAttending state when the attendingActivities state changes
    if (user && user.attendances) {
      setIsAttending(attendingActivities.includes(activity.id));
    }
  }, [attendingActivities, activity.id, user]);

  // Close the modal
  const handleModalClose = () => {
    setShow(false);
  };

  // Delete selected activity
  const deleteOneActivity = () => {
    deleteActivity(activity.id, activity.image);
  };

  const handleJoinActivity = async () => {
    try {
      await joinActivity(user.uid, activity.id, setAllActivities);
      console.log("Activity joined successfully!");
    } catch (error) {
      console.error("Error joining activity: ", error);
    }
  };

  const handleWithdrawClick = () => {
    handleWithdraw(activity.id);
  };

  // Calculating the time until the activity starts
  const now = new Date();
  const eventStart = new Date(activity.date);
  const timeUntilEvent = eventStart - now;
  const days = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeUntilEvent / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeUntilEvent / (1000 * 60)) % 60);

  return (
    // Render activity container
    <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 py-4 my-2 justify-center align-center content-center items-center">
      {/* Renders left part of the activity grid */}
      <div id="image" name="image" className="flex">
        <img
          src={activity.image}
          alt="activity"
          className="flex my-2 rounded-lg max-h-[250px]"
        />
      </div>
      {/* Renders middle part of the activity grid */}
      <div id="details" name="details" className="flex-row">
        <h3 className="font-bold text-2xl mb-4">{activity.title}</h3>
        <div id="eventInfo" name="eventInfo">
          {activity.description}
        </div>
        <span className="justify-items-auto"></span>
        <div name="eventLocation" id="eventLocation" className="mt-4">
          <p className="font-bold">Event will take place on: </p>
          <div name="eventTime" id="eventTime">
            {activity.date.toString()} at {activity.time}
          </div>
          <div name="eventAddress" id="eventAddress" className="mt-4">
            <span className="font-bold">Location: </span>
            <div>{activity.location}</div>
          </div>
          <div className="flex-nowrap justify-center gap-2 mx-6 px-4 py-4 mb-2 text-center">
            {activity.tags.map((interest, i) => {
              return (
                <span
                  key={i}
                  className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 text-sm font-semibold text-black-600"
                >
                  #{interest.trim()}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* Renders right side of the activity grid */}
      <div className="flex-row">
        {creator ? (
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img
                src={activity.creator.profileImage}
                className="rounded-full"
              />
            </div>
            <p className="mb-2">{activity.creator.name}</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p>
              {days > 1 ? days + " days," : null} {hours} hours, {minutes}{" "}
              minutes
            </p>
            <div className="font-bold">
              {activity.attendees}/{activity.maxAttendees} Attenders
            </div>
            {activity.attendees == activity.maxAttendees ? (
              <div>Max Attenders</div>
            ) : (
              <Button
                onClick={() => handleJoinActivity()}
                type="button"
                text="Join"
                buttonStyles="right-0 text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            )}
          </div>
        ) : isSearchPage ? (
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img
                src={activity.creator.profileImage}
                className="rounded-full"
              />
            </div>
            <p className="mb-2">{activity.creator.name}</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p>
              {days ? days + " days" : null}, {hours} hours, {minutes} minutes
            </p>
          </div>
        ) : attending ? (
          <Button
            type={"button"}
            text={"Withdraw from activity"}
            onClick={() => handleWithdrawClick(user.uid, activity.id)}
            buttonStyles={
              "text-white mr-4 bg-red-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
            }
          />
        ) : (
          <div className="flex-row">
            <div className="font-bold">
              {activity.attendees}/{activity.maxAttendees} attenders
            </div>
            <Button
              type={"button"}
              text={"Edit"}
              onClick={() => setShow(true)}
              buttonStyles={
                "text-white mr-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
              }
            />
            <Button
              type={"button"}
              text={"Delete"}
              onClick={() => deleteOneActivity()}
              buttonStyles={
                "text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
              }
            />
            <>
              <Modal
                open={show}
                onClose={handleModalClose}
                register={"activity"}
                activity={activity}
                creator={creator}
              />
            </>
          </div>
        )}
      </div>
    </div>
  );
};
export default Activity;
