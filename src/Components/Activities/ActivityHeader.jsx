import React, { Fragment } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import SearchActivities from "./SearchActivities";
import AttendingActivities from "./AttendingActivities";
import MyActivities from "./MyActivities";

// Define a CSS class for active navigation items
const activeCSS = "bg-white rounded-full shadow text-indigo-900 ";

// Define a component for rendering the activity navigation bar
const ActivityHeader = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Define a function to check if a given path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Render the activity navigation bar and its associated routes
  return (
    <Fragment>
      {/* Render the activity navigation bar as an unordered list */}
      <ul className="mx-4 my-4 py-2 grid grid-flow-col text-center text-black-500 bg-green-50 rounded-full px-1">
        {/* Render a navigation item for attending activities */}
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/attending-activities") ? activeCSS : ""
          }`}
        >
          <NavLink to="attending-activities">Attending Activities</NavLink>
        </li>
        {/* Render a navigation item for the user's activities */}
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/my-activities") ? activeCSS : ""
          }`}
        >
          <NavLink to="my-activities">My activities</NavLink>
        </li>
        {/* Render a navigation item for searching activities */}
        <li
          className={`grow justify-center py-2 ${
            isActive("/activities/search-activities") ? activeCSS : ""
          }`}
        >
          <NavLink to="search-activities">Search Activities</NavLink>
        </li>
      </ul>

      {/* Render the routes for the activity navigation bar */}
      <Routes>
        <Route path="/search-activities" element={<SearchActivities />} />
        <Route path="/attending-activities" element={<AttendingActivities />} />
        <Route path="/my-activities" element={<MyActivities />} />
      </Routes>
    </Fragment>
  );
};

export default ActivityHeader;
