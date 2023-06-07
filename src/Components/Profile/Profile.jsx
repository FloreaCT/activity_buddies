import React, { useEffect, useRef, useState } from "react";
import Modal from "../../Utils/Modal";
import { css } from "@emotion/css";
import { retrieveProfile } from "../../Services/ProfileService";
import { auth } from "../../Config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import _ from "lodash";

// CSS styles for the profile form
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
// The Profile component displays the user's profile information.
const Profile = () => {
  // Define state variables for showing the profile edit modal and whether the profile data is currently being loaded
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  // Define state variable for the user's profile information
  const [userProfile, setUserProfile] = useState({
    about: "",
    photoURL: "",
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

  // Use the useRef hook to store the previous user profile data and compare it to the new data to prevent unnecessary re-renders
  const prevUserProfileRef = useRef();

  // Use the useEffect hook to retrieve the user's profile data when the component mounts or when the show state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Retrieve the user's profile data
          const oldProfile = await retrieveProfile(user.uid);
          const newProfile = oldProfile.data();
          // If the retrieved profile data is different from the previous profile data, update the userProfile state
          if (!_.isEqual(prevUserProfileRef.current, newProfile)) {
            setUserProfile((userProfile) => ({
              ...userProfile,
              ...newProfile,
            }));
            prevUserProfileRef.current = newProfile;
          }
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    });
    return unsubscribe;
  }, [show]);

  // Handle the submission of the profile edit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
  };

  // Handle closing the profile edit modal
  const handleModalClose = () => {
    setShow(false);
  };

  // Render the Profile component
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row space-x-4">
          <div className="m-auto border-2 text-center rounded-md max-w-lg pb-10">
            <div className="h-20 w-20 m-auto">
              <img src={userProfile.photoURL} className="rounded-full mt-2" />
            </div>
            <div>
              {userProfile.basicinfo.firstName +
                " " +
                userProfile.basicinfo.lastName}
            </div>
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
                {userProfile.location.city}, {userProfile.location.county},
                {userProfile.location.postcode}
              </span>
              <div>
                <button
                  onClick={() => {
                    setShow(true);
                  }}
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
              <p>Birthday: {userProfile.basicinfo.birthday}</p>
              <p>Gender: {userProfile.basicinfo.gender}</p>
              <p>Email: {userProfile.basicinfo.email}</p>
              <p>Phone: {userProfile.basicinfo.phone}</p>
            </div>
            <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>Education</div>
            <div className="bg-green-50 mx-6 px-4 mb-2 border-[1px] border-grey rounded text-left">
              <p>University: {userProfile.education.university}</p>
              <p>Course: {userProfile.education.course}</p>
              <p>Year: {userProfile.education.year}</p>
              <p>Classroom: {userProfile.education.classroom}</p>
            </div>
            <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>Interest</div>
            <div className="flex-nowrap justify-center gap-2 mx-6 px-4 py-4 mb-2 border-[1px] border-grey rounded text-left">
              {userProfile.interests.map((interest, i) => {
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
            <hr className="h-px my-3 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div>About me</div>
            <div className="bg-green-50 mx-6 px-4 mb-2 border-[1px] border-grey rounded text-left">
              <p>{userProfile.about}</p>
            </div>
            <Modal
              open={show}
              onClose={handleModalClose}
              onSave={handleSubmit}
              userProfile={userProfile}
              register={false}
            ></Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
