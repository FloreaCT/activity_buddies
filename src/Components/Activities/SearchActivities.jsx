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
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search activities..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
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
              <text className="font-bold">Event will take place at on: </text>
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
              <text className="font-bold">Event will take place at on: </text>
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
