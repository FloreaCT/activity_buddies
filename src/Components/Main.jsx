import React from "react";
import Profile from "./Profile/Profile";
import { Route, Routes } from "react-router";
import ActivityHeader from "./Activities/ActivityHeader";
import Buddies from "./Buddies/buddies";
import HomeMessages from "./HomeMessages";
import { ChatContextProvider } from "./Messages/ChatContext";

//Rendering the main component
const Main = () => {
  //Render the routes for the application
  return (
    <div className="p-8 sm:ml-64">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/activities/*" element={<ActivityHeader />} />
        <Route path="/buddies/*" element={<Buddies />} />

        <Route
          path="/Messages/*"
          element={
            <ChatContextProvider>
              <HomeMessages />
            </ChatContextProvider>
          }
        />

        <Route path="*" element={<div>Nothing here to see</div>} />
      </Routes>
    </div>
  );
};

export default Main;
