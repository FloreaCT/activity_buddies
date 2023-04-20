import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Main from "./Main";
function NavBar() {
  const [main, setMain] = useState(0);

  const onClickHandler = (e) => {
    setMain(e.target.id);
  };

  useEffect(() => {}, [main]);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col relative px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <NavLink
            to="/dashboard"
            onClick={onClickHandler}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="dashboard-alt"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="primary"
                  d="M2,8V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2V8Zm14,2V22h4a2,2,0,0,0,2-2V10Z"
                  style={{ fill: "#000000" }}
                ></path>
                <path
                  id="secondary"
                  d="M14,10H2V20a2,2,0,0,0,2,2H14Z"
                  style={{ fill: "#2ca9bc" }}
                ></path>
              </g>
            </svg>
            <span className="ml-3" id="1">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/profile"
            onClick={onClickHandler}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21.6,17c2.1-1.6,3.4-4.2,3.4-7c0-5-4-9-9-9s-9,4-9,9c0,2.8,1.3,5.4,3.4,7C5.2,17.3,1,21.7,1,27v3 c0,0.5,0.5,1,1,1h14h14c0.5,0,1-0.5,1-1v-3C31,21.7,26.8,17.3,21.6,17z"
                  fill="#FFC10A"
                ></path>{" "}
                <path
                  d="M21.6,17c-1.5,1.2-3.5,2-5.6,2s-4.1-0.7-5.6-2C5.2,17.3,1,21.7,1,27v3c0,0.5,0.5,1,1,1h14h14 c0.5,0,1-0.5,1-1v-3C31,21.7,26.8,17.3,21.6,17z"
                  fill="#2197F3"
                ></path>{" "}
              </g>{" "}
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap" id="2">
              Profile
            </span>
          </NavLink>
          <NavLink
            to="/activities"
            onClick={onClickHandler}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              viewBox="0 0 1024.00 1024.00"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M106.666667 810.666667V298.666667h810.666666v512c0 46.933333-38.4 85.333333-85.333333 85.333333H192c-46.933333 0-85.333333-38.4-85.333333-85.333333z"
                  fill="#CFD8DC"
                ></path>
                <path
                  d="M917.333333 213.333333v128H106.666667v-128c0-46.933333 38.4-85.333333 85.333333-85.333333h640c46.933333 0 85.333333 38.4 85.333333 85.333333z"
                  fill="#F44336"
                ></path>
                <path
                  d="M704 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                  fill="#B71C1C"
                ></path>
                <path
                  d="M320 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                  fill="#B71C1C"
                ></path>
                <path
                  d="M704 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667zM320 64c-23.466667 0-42.666667 19.2-42.666667 42.666667v106.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V106.666667c0-23.466667-19.2-42.666667-42.666667-42.666667z"
                  fill="#B0BEC5"
                ></path>
                <path
                  d="M277.333333 426.666667h85.333334v85.333333h-85.333334zM405.333333 426.666667h85.333334v85.333333h-85.333334zM533.333333 426.666667h85.333334v85.333333h-85.333334zM661.333333 426.666667h85.333334v85.333333h-85.333334zM277.333333 554.666667h85.333334v85.333333h-85.333334zM405.333333 554.666667h85.333334v85.333333h-85.333334zM533.333333 554.666667h85.333334v85.333333h-85.333334zM661.333333 554.666667h85.333334v85.333333h-85.333334zM277.333333 682.666667h85.333334v85.333333h-85.333334zM405.333333 682.666667h85.333334v85.333333h-85.333334zM533.333333 682.666667h85.333334v85.333333h-85.333334zM661.333333 682.666667h85.333334v85.333333h-85.333334z"
                  fill="#90A4AE"
                ></path>
              </g>
            </svg>
            <span className="ml-3" id="3">
              Activities
            </span>
          </NavLink>
          <NavLink
            to="/notifications"
            onClick={onClickHandler}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="notification-circle"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="secondary"
                  d="M18,13V9c0-.06,0-.12,0-.18A3,3,0,0,1,17,9a3,3,0,0,1-3-3,2.94,2.94,0,0,1,1-2.2A5.9,5.9,0,0,0,12,3,6,6,0,0,0,6,9v4L4.62,14.38A2.12,2.12,0,0,0,6.12,18H17.88a2.12,2.12,0,0,0,1.5-3.62Z"
                  style={{ fill: "#2ca9bc", strokeWidth: "2" }}
                ></path>
                <path
                  id="primary"
                  d="M18,9v4l1.38,1.38A2.12,2.12,0,0,1,17.88,18H6.12a2.12,2.12,0,0,1-1.5-3.62L6,13V9a6,6,0,0,1,6-6,6,6,0,0,1,2.88.73"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M12,21h0a3,3,0,0,1-3-3h6A3,3,0,0,1,12,21ZM14,6a3,3,0,0,0,3,3h0a3,3,0,0,0,3-3h0a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3Z"
                  style={{
                    fill: "none",
                    stroke: "#000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
              </g>
            </svg>
            <span className="ml-3" id="4">
              Notifications
            </span>
          </NavLink>
          <span className="grow"></span>
          <NavLink
            to="/logout"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              viewBox="0 0 1024.00 1024.00"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21 12L13 12"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
          </NavLink>
        </div>
      </aside>
      <Main link={main} />
      <Outlet />
    </>
  );
}

export default NavBar;
