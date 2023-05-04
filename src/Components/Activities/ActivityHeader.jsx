import React, { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import SearchActivities from "./SearchActivities";
import AttendingActivities from "./AttendingActivities";
import MyActivities from "./MyActivities";

const ActivityHeader = () => {
  return (
    <Fragment>
      <ul className="mx-4 my-4 py-2 grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full px-1">
        <li className="grow justify-center py-2">
          <NavLink to="attending-activities">Attending Activities</NavLink>
        </li>
        <li className="grow justify-center py-2">
          <NavLink to="my-activities">My activities</NavLink>
        </li>
        <li className="grow justify-center bg-white rounded-full shadow text-indigo-900 py-2">
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
