import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { css } from "@emotion/css";
import { retrieveProfile } from "./ProfileService";
import { UserAuth } from "../../Auth/AuthContext";

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

const Profile = () => {
  const [show, setShow] = useState(false);

  const [userProfile, setUserProfile] = useState({
    about: "",
    avatar: "",
    basicinfo: {
      birthday: "",
      name: "",
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
    uuid: 0,
  });

  const { user } = UserAuth();

  useEffect(() => {
    (async () => {
      try {
        console.log(user.uid);
        const oldProfile = await retrieveProfile();
        const newProfile = oldProfile.data();
        setUserProfile((userProfile) => ({
          ...userProfile,
          ...newProfile,
        }));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShow(false);
  };

  const handleChange = () => {
    // const { name, value } = event.target;
    // setUserProfile((prevValues) => ({
    //   ...prevValues,
    //   [name]: value,
    // }));
  };

  return (
    <div className="flex flex-row space-x-4">
      <div className="m-auto border-2 text-center rounded-md max-w-lg pb-10">
        <div className="h-20 w-20 m-auto">
          <img src="../public/img/profile-picture.jpg" />
        </div>
        <div>Constantin Florea</div>
        <div className="m-auto">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="inline-block w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
          </svg>
          <span className="text-xs pt-[10px]">
            Marston Green, Birmingham, B37 5PG
          </span>
          <div>
            <button
              onClick={() => setShow(true)}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mt-2"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>Basic info</div>
        <div className="bg-green-50 mx-6 px-4 mb-2 border-[1px] border-grey rounded text-left">
          <p>Birthday: 25 December, 2020</p>
          <p>Gender: Male</p>
          <p>Email: floreact@solent.ac.uk</p>
          <p>Phone: 07310012345</p>
        </div>
        <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>Education</div>
        <div className="bg-green-50 mx-6 px-4 mb-2 border-[1px] border-grey rounded text-left">
          <p>University: Solent</p>
          <p>Course: Computing</p>
          <p>Year: 3</p>
          <p>Classroom: 505</p>
        </div>
        <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>Interest</div>
        <div className="flex-nowrap justify-center gap-2 mx-6 px-4 py-4 mb-2 border-[1px] border-grey rounded text-left">
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 text-sm font-semibold text-gray-600">
            #photography
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 my-1 text-sm font-semibold text-gray-600">
            #travel
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 my-1 text-sm font-semibold text-gray-600">
            #running
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 my-1 text-sm font-semibold text-gray-600">
            #chill
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 my-1 py-1 text-sm font-semibold text-gray-600">
            #swiming
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 my-1 px-2 py-1 text-sm font-semibold text-gray-600">
            #jogging
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 my-1 px-2 py-1 text-sm font-semibold text-gray-600">
            #karting
          </span>
        </div>
        <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>About me</div>
        <div className="bg-green-50 mx-6 px-4 mb-2 border-[1px] border-grey rounded text-left">
          <p>
            "An inquisitive individual seeking knowledge and growth, with a
            passion for learning and a desire to make a positive impact in the
            world. An inquisitive individual seeking knowledge and growth, with
            a passion for learning and a desire to make a positive impact in the
            world."
          </p>
        </div>
        <Modal open={show} onSave={handleSubmit}>
          <form className={formStyles} onSubmit={handleSubmit}>
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setShow(false)}
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
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
