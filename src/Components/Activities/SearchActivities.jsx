import React from "react";

const SearchActivities = () => {
  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <h1 className="font-bold text-2xl mb-10 mt-10">
          Best activities around Birmingham
        </h1>
        <div className="flex-nowrap justify-center gap-2 mx-6 px-4 py-4 mb-2 border-[1px] border-grey rounded ">
          <form className="mb-4 justify-center m-auto max-w-lg">
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              ></label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                City
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search for activities..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>

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
          <span className="inline-block bg-green-50 rounded-full mx-1 my-1 px-2 py-1 text-sm font-semibold text-gray-600">
            #karting
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 py-4 my-2 justify-center align-center content-center items-center">
          <div className="flex">
            <img
              src="../public/img/activity.jpg"
              alt="activity"
              className="flex my-2 rounded-lg max-h-[250px]"
            />
          </div>
          <div className="flex-row">
            <h3 className="font-bold text-2xl mb-4">Meeting to code!</h3>
            <div>
              Come join us in an amazing coding session where you will learn how
              to become the master zen of all coding languages!
            </div>
            <span className="justify-items-auto"></span>
            <div className="mt-4">
              <p className="font-bold">Event will take place at on: </p>
              <div>27 March at 21:00</div>
              <div className="mt-4">
                <span className="font-bold">Location: </span>
                <div>
                  5th Floor, Centre City House, 5, 7 Hill St, Birmingham B5 4UA
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img src="../public/img/profile-picture.jpg" />
            </div>
            <p className="mb-2">Constantin Cristian Florea</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p> 1 day, 22 hours</p>
            <div className="font-bold">7/10 Attenders</div>
            <button
              type="submit"
              className="right-0 text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 py-4 my-2 justify-center align-center content-center items-center">
          <div className="flex">
            <img
              src="../public/img/activity.jpg"
              alt="activity"
              className="flex my-2 rounded-lg max-h-[250px]"
            />
          </div>
          <div className="flex-row">
            <h3 className="font-bold text-2xl mb-4">Meeting to code!</h3>
            <div>
              Come join us in an amazing coding session where you will learn how
              to become the master zen of all coding languages!
            </div>
            <span className="justify-items-auto"></span>
            <div className="mt-4">
              <p className="font-bold">Event will take place at on: </p>
              <div>27 March at 21:00</div>
              <div className="mt-4">
                <span className="font-bold">Location: </span>
                <div>
                  5th Floor, Centre City House, 5, 7 Hill St, Birmingham B5 4UA
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row relative">
            <h3 className="font-bold text-2xl">Created by</h3>
            <div className="h-20 w-20 m-auto">
              <img src="../public/img/profile-picture.jpg" />
            </div>
            <p className="mb-2">Constantin Cristian Florea</p>
            <p className="font-bold text-1xl">Time left until event starts:</p>
            <p> 1 day, 22 hours</p>
            <div className="font-bold">7/10 Attenders</div>
            <button
              type="submit"
              className="right-0 text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActivities;
