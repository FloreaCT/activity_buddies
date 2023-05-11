import React, { useState, useEffect } from "react";
import { initFlowbite } from "flowbite";
import { css } from "@emotion/css";
import { updateProfile } from "../../Services/ProfileService";

const autoFillStyle = css`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #4285f4;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const Form = ({ onClose = { onClose }, userProfile = { userProfile } }) => {
  const [formValues, setFormValues] = useState({
    about: "",
    avatar: "",
    basicinfo: {
      birthday: "",
      firstName: "",
      lastName: "",
      phone: 0,
      gender: "",
      email: "",
    },
    interests: [],
    education: {
      university: "",
      course: "",
      year: 0,
      classroom: 0,
    },
    location: {
      city: "",
      county: "",
      postcode: "",
    },
    uid: 0,
  });

  useEffect(() => {
    initFlowbite();
    if (Object.keys(userProfile).length !== 0) {
      setFormValues(userProfile);
    }
  }, [userProfile]);

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Neutral", label: "Neutral" },
    { value: "Non-binary", label: "Non-binary" },
    { value: "Other", label: "Other" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "birthday" ||
      name === "phone" ||
      name === "year" ||
      name === "classroom" ||
      name === "uid"
    ) {
      // Convert numeric input values to numbers
      setFormValues((prevState) => ({
        ...prevState,
        basicinfo: {
          ...prevState.basicinfo,
          [name]: Number(value),
        },
      }));
    } else if (name === "interests") {
      // Handle interests as an array
      const interestsArray = value.split(",");
      setFormValues((prevState) => ({
        ...prevState,
        [name]: interestsArray,
      }));
    } else if (name.startsWith("basicinfo.")) {
      // Handle nested fields in basicinfo object
      const nestedField = name.split("basicinfo.")[1];
      setFormValues((prevState) => ({
        ...prevState,
        basicinfo: {
          ...prevState.basicinfo,
          [nestedField]: value,
        },
      }));
    } else {
      // Handle other input values
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formValues);
    onClose();
  };

  return (
    <div>
      <h3 className="text-2xl text-center mb-10">Edit your profile</h3>
      <form className={`${autoFillStyle}`} onSubmit={(e) => handleSubmit(e)}>
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="basicinfo.firstName"
              id="basicinfo.firstName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => handleChange(e)}
              defaultValue={userProfile.basicinfo.firstName}
              required
            />
            <label
              htmlFor="basicinfo.first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="basicinfo.lastName"
              id="basicinfo.lastName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.basicinfo.lastName}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <label
              htmlFor="lastName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="location.city"
              id="location.city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              max={4}
              min={0}
              defaultValue={userProfile.location.city}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              htmlFor="location.city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="location.county"
              id="location.county"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.location.county}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              htmlFor="location.county"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              County
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="location.postcode"
              id="location.postcode"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.location.postcode}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              htmlFor="location.postcode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Postcode
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="basicinfo.birthday"
              id="basicinfo.birthday"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.basicinfo.birthday}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              htmlFor="basicinfo.birthday"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Birthday
            </label>
          </div>{" "}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="basicinfo.phone"
              id="basicinfo.phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={userProfile.basicinfo.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label
              htmlFor="basicinfo.birthday"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>
        <div className="grid m-auto">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="basicinfo.gender"
                className="block mb-2 text-sm text-gray-900 dark:text-white"
              >
                Select gender
              </label>
              <select
                id="basicinfo.gender"
                name="basicinfo.gender"
                defaultValue={userProfile.basicinfo.gender}
                onChange={(e) => handleChange(e)}
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {genderOptions.map((option, i) => (
                  <option name="" value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="interests">
                <p className=" text-sm text-gray-900">
                  Separate interests using comma
                </p>
                <textarea
                  name="interests"
                  value={formValues.interests}
                  onChange={handleChange}
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="education.university"
                id="education.university"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                defaultValue={userProfile.education.university}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label
                htmlFor="education.university"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                University
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="education.classroom"
                id="education.classroom"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                min={0}
                defaultValue={userProfile.education.classroom}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label
                htmlFor="education.classroom"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Classroom
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="education.year"
                id="education.year"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                max={4}
                min={0}
                defaultValue={userProfile.education.year}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label
                htmlFor="education.year"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Year
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="education.course"
                id="education.course"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                defaultValue={userProfile.education.university}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label
                htmlFor="education.course"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Course
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative px-[20%] z-0 w-full mb-6 group">
              <label htmlFor="about">
                <p className="text-center text-sm text-gray-900">About me</p>
                <textarea
                  name="about"
                  value={formValues.about}
                  onChange={handleChange}
                  rows="5"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
