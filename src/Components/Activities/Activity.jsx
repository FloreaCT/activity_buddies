import React from "react";
import Button from "../../Utils/Button";

const Activity = ({ activity, isSearchPage }) => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 py-4 my-2 justify-center align-center content-center items-center">
      <div id="image" name="image" className="flex">
        <img
          src={activity.image}
          alt="activity"
          className="flex my-2 rounded-lg max-h-[250px]"
        />
      </div>

      <div id="details" name="details" className="flex-row">
        <h3 className="font-bold text-2xl mb-4">{activity.title}</h3>
        <div id="eventInfo" name="eventInfo">
          {activity.description}
        </div>
        <span className="justify-items-auto"></span>
        <div name="eventLocation" id="eventLocation" className="mt-4">
          <p className="font-bold">Event will take place on: </p>
          <div name="eventTime" id="eventTime">
            {activity.date} at {activity.time}
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
      <div className="flex-row">
        {isSearchPage && (
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img src={activity.creator.profileImage} />
            </div>
            <p className="mb-2">{activity.creator.name}</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p>{activity.timeLeft}</p>
          </div>
        )}
        <div className="font-bold">
          {activity.attendees}/{activity.maxAttendees} attenders
        </div>
        <Button
          type={"button"}
          text={"Edit"}
          buttonStyles={
            "text-white mr-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
          }
        />
        <Button
          type={"button"}
          text={"Delete"}
          buttonStyles={
            "text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
          }
        />
      </div>
    </div>
  );
};
export default Activity;
