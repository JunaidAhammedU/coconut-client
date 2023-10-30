import React from "react";
import { Navigate } from "react-router-dom";
//----------------------------------------------

const AdminProtectedRoutes = ({ element }) => {
  const  admin  = JSON.parse(localStorage.getItem("admin"));

  if (!admin) {
    return <Navigate to={"/admin/login"} replace />;
  }

  return <>{element}</>;
};

export default AdminProtectedRoutes;
