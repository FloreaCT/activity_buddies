import React from "react";

const SearchActivities = () => {
  return (
    <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
      <div className="w-screen border-2 text-center rounded-md pb-10">
        <ul className="mx-4 my-4 py-2 grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full px-1">
          <li className="grow justify-center py-2">
            <a href="#page1">Enrolled Activities</a>
          </li>
          <li className="grow justify-center py-2">
            <a href="#page2">My activities</a>
          </li>
          <li className="grow justify-center bg-white rounded-full shadow text-indigo-900 py-2">
            <a href="#page3">Search Activities</a>
          </li>
        </ul>
        <h1 className="font-bold text-2xl mb-10">
          Best activities around Birmingham
        </h1>
        <div className="flex-nowrap justify-center gap-2 mx-6 px-4 py-4 mb-2 border-[1px] border-grey rounded ">
          <h2 className="text-lg font-medium mb-6">Select an activity type</h2>
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
        <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6">
          <div className="flex">
            <img
              src="../public/img/activity.jpg"
              alt="activity"
              className="flex my-2 rounded-lg"
            />
          </div>
          <div className="flex-row">
            <h3 className="font-bold text-2xl mb-4">Meeting to code!</h3>
            <div>
              Come join us in an amazing coding session where you will learn how
              to become the master zen of all coding languages!
            </div>
            <span className="justify-items-auto"></span>
            <div className="mt-20">
              <text className="font-bold">Event will take place at on: </text>
              <div>27 March at 21:00</div>
              <div className="mt-16">
                <span className="font-bold">Location: </span>
                <div>
                  {" "}
                  5th Floor, Centre City House, 5, 7 Hill St, Birmingham B5 4UA
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row h-full w-full">
            <h3 className="font-bold text-2xl">Event location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6303.264683737447!2d-1.8803305655589297!3d52.47477549541541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd38f80fcbb3%3A0x6daf9dba8e953a1c!2sSolent%20University%20-%20Birmingham%20Campus!5e0!3m2!1sen!2suk!4v1683138345589!5m2!1sen!2suk"
              width="95%"
              height="80%%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchActivities;
