import React from "react";
import { Navigate } from "react-router-dom";


const AuthProtected = ({element}) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <>{element}</>;
};

export default AuthProtected