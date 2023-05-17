import React from "react";
import { Navigate } from "react-router";
import { UserAuth } from "../Auth/AuthContext";

// Define the ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  // Get the current user from the UserAuth context
  const { user } = UserAuth();

  // If there is no user, redirect to the sign-in page
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // If there is a user, render the children components
  return children;
};

// Export the ProtectedRoute component
export default ProtectedRoute;
