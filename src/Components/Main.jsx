import React from "react";
import Profile from "./Profile";
import { Route, Routes } from "react-router";
import Activities from "./Activities/MyActivities";

const Main = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/activities*" element={<Activities />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
