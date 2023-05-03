import React from "react";
import EnrolledActivities from "./EnrolledActivities";
import SearchActivities from "./SearchActivities";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
const MyActivities = () => {
  return (
    <section>
      <div> My activities </div>
      <NavLink to="/searchActivities">GO there</NavLink>
      <NavLink to="/EnrolledActivities">GO there</NavLink>
      <Routes>
        <Route path="/searchActivities" element={<SearchActivities />} />
        <Route path="/enrolledActivities" element={<EnrolledActivities />} />
      </Routes>
    </section>
  );
};

export default MyActivities;
