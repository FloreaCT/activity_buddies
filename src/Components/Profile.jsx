import React from "react";

/* eslint-disable */
const Profile = () => {
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
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mt-2">Edit Profile</button>
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
          <span className="inline-block bg-green-50 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-600">
            #photography
          </span>
          <span className="inline-block bg-green-50 rounded-full mx-1 px-2 py-1 my-1text-sm font-semibold text-gray-600">
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
      </div>
    </div>
  );
};

export default Profile;
