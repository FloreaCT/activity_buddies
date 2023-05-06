import React, { useState } from "react";
import { css } from "@emotion/css";

const formStyles = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
    max-width: 400px;
  }

  input[type="text"],
  input[type="email"],
  input[type="date"],
  input[type="number"],
  textarea,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    margin-top: 5px;
    width: 100%;
  }

  input[type="file"] {
    margin-top: 10px;
  }

  button[type="submit"] {
    margin-top: 20px;
    background-color: #0077c2;
    color: #fff;
    font-size: 16px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #005fa6;
  }
`;

const Form = (props) => {
  const [userProfile, setUserProfile] = useState(props.userData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    return;
  };
  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      <button
        type="button"
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={() => props.onClose()}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={userProfile.basicinfo.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-3 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City:
          </label>
          <input
            type="text"
            name="city"
            value={userProfile.location.city}
            onChange={handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            County:
          </label>
          <input
            type="text"
            name="county"
            value={userProfile.location.county}
            onChange={handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Postcode:
          </label>
          <input
            type="text"
            name="postcode"
            value={userProfile.location.postcode}
            onChange={handleChange}
          />
        </div>{" "}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Gender:
        </label>
        <input
          type="text"
          name="gender"
          value={userProfile.basicinfo.gender}
          onChange={handleChange}
        />
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone:
        </label>
        <input
          type="number"
          name="phone"
          value={userProfile.basicinfo.phone}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          University:
        </label>
        <input
          type="text"
          name="university"
          value={userProfile.education.university}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Course:
        </label>
        <input
          type="text"
          name="course"
          value={userProfile.education.course}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Year:
        </label>
        <input
          type="number"
          name="year"
          value={userProfile.education.year}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Classroom:
        </label>
        <input
          type="number"
          name="classroom"
          value={userProfile.education.classroom}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Interest:
        </label>
        <input
          type="text"
          name="interest"
          value={userProfile.interests.map((interest) => ` ${interest}`)}
          onChange={handleChange}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          About:
        </label>
        <textarea
          name="about"
          value={userProfile.about}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor=""
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Avatar:
        </label>
        <input type="file" name="avatar" onChange={handleChange} />
      </div>
      <button type="submit">Save changes</button>
    </form>
  );
};

export default Form;
