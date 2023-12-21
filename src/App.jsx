import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
//---------------------------------------------------------------------------------

const App = () => {
  return (
    <div>
      <Routes>
        {/* Admin Routes */}
        <Route path="/*" element={<UserRoutes />} />
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
};

export default App;
