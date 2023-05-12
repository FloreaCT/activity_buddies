import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import SearchActivities from "./SearchActivities";
import AttendingActivities from "./AttendingActivities";
import MyActivities from "./MyActivities";

const activeCSS = "bg-white rounded-full shadow text-indigo-900 ";

const ActivityHeader = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Fragment>
      <ul className="mx-4 my-4 py-2 grid grid-flow-col text-center text-black-500 bg-green-50 rounded-full px-1">
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/attending-activities")
              ? " bg-white rounded-full shadow text-indigo-900 "
              : ""
          }`}
        >
          <NavLink to="attending-activities">Attending Activities</NavLink>
        </li>
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/my-activities")
              ? " bg-white rounded-full shadow text-indigo-900 "
              : ""
          }`}
        >
          <NavLink to="my-activities">My activities</NavLink>
        </li>
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/search-activities")
              ? " bg-white rounded-full shadow text-indigo-900 "
              : ""
          }`}
        >
          <NavLink to="search-activities">Search Activities</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/search-activities" element={<SearchActivities />} />
        <Route path="/attending-activities" element={<AttendingActivities />} />
        <Route path="/my-activities" element={<MyActivities />} />
      </Routes>
    </Fragment>
  );
};

export default ActivityHeader;
