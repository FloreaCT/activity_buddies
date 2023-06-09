import React, { useEffect, useRef, useState } from "react";
import Button from "../../Utils/Button";
import { css } from "@emotion/css";
import DatePicker from "react-datepicker";
import { GoCalendar } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";
import { addActivity, updateActivity } from "../../Services/ActivityService";
import { UserAuth } from "../../Auth/AuthContext";
import ImageService from "../../Services/ImageService";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// Render the form for editing and adding an activity
const ActivityForm = ({
  activity = {},
  onClose = { onClose },
  creator = { creator },
}) => {
  // Define state variables for activity form data and uploading an image
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: activity.title || "",
    image: "",
    tags: activity.tags ? activity.tags.join(", ") : [],
    description: activity.description || "",
    date: activity.date ? new Date(activity.date) : new Date(),
    time: activity.time || "",
    location: activity.location || "",
    attendees: activity.attendees || 0,
    maxAttendees: activity.maxAttendees || 0,
  });
  const { dbUser } = UserAuth();

  const dateRef = useRef(null);

  //Opening date input when pressing on the div input and not only on the icon
  const openDate = () => {
    dateRef.current.setFocus();
  };

  //Function to handle form changes
  const handleChange = (event, name) => {
    if (name) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: event,
      }));
      //Adding tags to formData as an array
    } else if (event.target.name === "tags") {
      const tags = event.target.value.split(",");
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: tags.map((tag) => tag.trim()),
      }));
    } else {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  //Function to add the image url inside the formData
  const handleImageUrl = (imgUrl) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: imgUrl,
    }));
  };

  //Function to disable the Create button when uploading an image
  const disableButton = (event) => {
    setIsUploading(event);
  };

  //Function to handle the submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    let tags = formData.tags;
    if (typeof tags === "string") {
      tags = tags.split(",").map((tag) => tag.trim());
    }
    const updatedData = {
      ...formData,
      tags: tags,
    };
    //If activity.id exists, it means we are updating the activity, else we are creating a new activity
    activity.id
      ? updateActivity(updatedData, activity.id)
      : addActivity(formData, dbUser);
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl text-center mb-10">
        {activity.id ? "Update the event" : "Create a new event"}
      </h3>
      {/* Form for creating or edtiting an activity*/}
      <form
        onSubmit={handleSubmit}
        className={`${autoFillStyle} min-w-[400px] `}
      >
        {/* Close button for the modal */}
        <button
          type="button"
          className="absolute top-3 right-2.5 text-black-400 bg-transparent hover:bg-black-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-black-800 dark:hover:text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              id="title"
              name="title"
              placeholder=" "
              value={formData.title}
              onChange={handleChange}
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event title
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="location"
              name="location"
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.location}
              onChange={handleChange}
            />
            <label
              htmlFor="location"
              className="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event location
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="description"
              className="peer-focus:font-medium relative text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-2 mt-4 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="tags"
              className="peer-focus:font-medium relative text-md text-black-500 dark:text-black-400 duration-300 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Add tags
            </label>
            <textarea
              id="tags"
              name="tags"
              rows="5"
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-2 mt-4 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="date"
              className="z-9999 peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event date
            </label>
            <DatePicker
              id="date"
              name="date"
              ref={dateRef}
              selected={formData.date}
              onChange={(date) => handleChange(date, "eventDate")}
              className="relative z-9999 block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <GoCalendar
              className="absolute ml-[85%] top-2 w-5 h-5 text-black-600 z-0"
              onClick={openDate}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="time"
              className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Time of the event
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="maxAttendees"
              className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Max Attendees:
            </label>
            <input
              type="number"
              id="maxAttendees"
              name="maxAttendees"
              className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={formData.maxAttendees}
              onChange={handleChange}
            />
          </div>
        </div>
        {/*Rendering the component that handles the image upload */}
        <div className="flex">
          <div className="m-auto">
            <ImageService
              userId={dbUser.uid}
              handleImageUrl={handleImageUrl}
              disableButton={disableButton}
            />
          </div>
        </div>
        {/* A button that gets disabled when uploading an image */}
        <div className="flex">
          <div className="m-auto">
            <Button
              disabled={isUploading ? true : false}
              type="submit"
              buttonStyles={
                isUploading
                  ? "text-white bg-red-600 cursor-not-allowed hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm mb-4 px-4 py-2"
                  : "text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm mb-4 px-4 py-2"
              }
              text={
                activity.id
                  ? "Update"
                  : isUploading
                  ? "Uploading..."
                  : "Create activity"
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
