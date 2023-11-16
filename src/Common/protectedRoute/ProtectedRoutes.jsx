import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//------------------------------------------

const ProtectedRoutes = ({ element }) => {
  const { user } = useSelector((state) => state);
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoutes;
