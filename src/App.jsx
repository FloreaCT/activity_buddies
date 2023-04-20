import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "flowbite";
import NavBar from "./Navigation/NavBar";
import Dashboard from "./Navigation/Dashboard";
import Profile from "./Navigation/Profile";
import Activities from "./Navigation/Activities";
import Notifications from "./Navigation/Notifications";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
