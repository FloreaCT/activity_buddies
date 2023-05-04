import React from "react";

const MyActivities = () => {
  const createActivityHandler = () => {
    return <div>I SHOULD MAKE A MODAL HERE </div>;
  };

  return (
    <section>
      <div className="flex flex-row space-x-4 m-auto basis-1/3 align-center justify-center">
        <div className="w-screen border-2 text-center rounded-md pb-10">
          <h1 className="font-bold text-2xl mt-2">Your activity list</h1>
          <button
            type="submit"
            className="text-white mb-4 mr-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
          >
            Create new activity
          </button>

          <div className="grid grid-cols-3 gap-4 rounded border-[1px] px-2 mx-6 items-center">
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
                Come join us in an amazing coding session where you will learn
                how to become the master zen of all coding languages!
              </div>
              <span className="justify-items-auto"></span>
              <div className="mt-4">
                <p className="font-bold">Event will take place at on: </p>
                <div>27 March at 21:00</div>
                <div className="mt-4">
                  <span className="font-bold">Location: </span>
                  <div>
                    5th Floor, Centre City House, 5, 7 Hill St, Birmingham B5
                    4UA
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <button
                type="submit"
                className="text-white mr-4 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
              >
                Edit
              </button>
              <button
                type="submit"
                className="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 mt-4"
              >
                Delete
              </button>
              <div className="mt-10 text-xl">People attending</div>
              <p className="font-bold">7/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyActivities;
