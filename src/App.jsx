import React from 'react'
import HomePage from './Pages/User/HomePage'
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/User/LoginPage';
import RegisterPage from './Pages/User/RegisterPage';
import PortectedRoute from './Common/protectedRoute/ProtectedRoutes'
import AuthProtected from './Common/protectedRoute/AuthProtected'
import OtpVerifyPage from './Pages/User/OtpVerifyPage'
//-----------------------------------------------------------------

const App = () => {
  return (
    <div>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<PortectedRoute element={<HomePage />} />} />
        <Route path="/login" element={<AuthProtected element={<LoginPage />} />} />
        <Route path="/register" element={<AuthProtected element={<RegisterPage />} />} />
        <Route path="/otp-verify" element={<OtpVerifyPage />} />
        {/* <Route path="/recipe-details" element={<RecipeDetails />} /> */}

        {/* Admin Routes */}
        {/* <Route path='/admin' element={<AdminLoginPage />} /> */}
      </Routes>
    </div>
  )
}

export default App