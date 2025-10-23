import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../backend/context/Auth"; // adjust path if needed

export const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  // ✅ Optional: handle case where localStorage is used directly
  const storedUser = localStorage.getItem("userInfo");
  const isAuthenticated = user || storedUser;

  if (!isAuthenticated) {
    // Redirect to login if no user
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the protected content
  return children;
};
