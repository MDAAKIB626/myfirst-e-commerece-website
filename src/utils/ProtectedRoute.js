import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token"); // ✅ match with Signin
  const isAdmin = localStorage.getItem("isAdmin");

  if (adminOnly) {
    // ✅ only admin allowed
    if (!token || isAdmin !== "true") {
      return <Navigate to="/signin" replace />;
    }
  } else {
    // ✅ normal user
    if (!token) {
      return <Navigate to="/signin" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
