import React from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Activities from "./Activities";
import Notifications from "./Notifications";

function Main({ link }) {
  let component = null;
  switch (link) {
    case "1":
      component = <Dashboard />;
      break;
    case "2":
      component = <Profile />;
      break;
    case "3":
      component = <Activities />;
      break;
    case "4":
      component = <Notifications />;
      break;
    default:
      component = null;
  }
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        {component}
      </div>
    </div>
  );
}

export default React.memo(Main);
