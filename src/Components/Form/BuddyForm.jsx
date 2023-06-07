import React, { useState } from "react";

import Button from "../../Utils/Button";
import { searchBuddy, sendBuddyRequest } from "../../Services/BuddieService";

const BuddyForm = ({ onClose, userData }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [buddy, setBuddy] = useState("");

  const handleBuddy = async () => {
    const foundBuddy = await searchBuddy(email);
    if (foundBuddy) {
      setBuddy(foundBuddy);
      setError("");
    } else {
      setBuddy("");
      setError("No buddy found with that email :(");
    }
  };

  const handleChange = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (e.key === "Enter") {
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email");
        return;
      }
      handleBuddy();
    }

    setEmail(e.target.value);

    if (!emailRegex.test(email)) {
      setError(null);
    }
  };

  const handleBuddyRequest = async () => {
    const sender = {
      uid: userData.uid,
      name: userData.displayName,
    };

    const succes = await sendBuddyRequest(buddy, sender);
    if (succes) {
      setMessage("Friend request sent successfully");
    } else {
      setError("Request already sent!");
    }
  };

  return (
    <div>
      <button
        type="button"
        className="absolute top-3 right-2.5 text-black-400 bg-transparent hover:bg-black-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-black-800 dark:hover:text-white"
        onClick={() => onClose()}
      >
        X
      </button>
      <div className="relative w-full z-0">
        <input
          className="block py-2.5 px-0 w-full text-lg text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="text"
          id="title"
          name="title"
          placeholder=" "
          onKeyDown={(e) => handleChange(e)}
          onChange={(e) => handleChange(e)}
        />

        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Enter your buddie's email
        </label>
        <div className="text-center pt-2">
          <Button
            onClick={() => handleBuddy()}
            type="button"
            text="Search Buddy"
            buttonStyles="right-0 text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </div>
        {error ? (
          <div className="text-red-500 pt-4 text-center">{error}</div>
        ) : null}
        {buddy ? (
          <div className="grid mt-4 text-center">
            <div className="rounded border-2 p-4 align-center">
              <img
                className="h-auto h-20 w-20 m-auto rounded-lg"
                src={buddy.avatar}
                alt=""
              />
              <p>Name: {buddy.name}</p>
              <p>University: {buddy.university}</p>
              <button
                type="submit"
                className="text-white mx-2 my-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                onClick={() => handleBuddyRequest()}
              >
                Add buddy
              </button>
            </div>
            {message ? (
              <div className="text-green-500 pt-4">{message}</div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BuddyForm;
