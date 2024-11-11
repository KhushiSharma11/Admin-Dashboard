import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("userRole");

  // If the user is not logged in or doesn't have the correct role, redirect them
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children; // Render children (protected component) if the role matches
};

export default PrivateRoute;
