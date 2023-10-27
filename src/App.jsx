import React from 'react'
import HomePage from './Pages/User/HomePage'
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/User/LoginPage';
import RegisterPage from './Pages/User/RegisterPage';
//-----------------------------------------------

const App = () => {
  return (
    <div>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        {/* <Route path="/login" element={<AuthProtected element={<LoginPage />} />} /> */}
        {/* <Route path="/register" element={<AuthProtected element={<RegisterPage />} />} /> */}
        {/* <Route path="/otp-verify" element={<OtpVerifyPage />} /> */}
        {/* <Route path="/recipe-details" element={<RecipeDetails />} /> */}

        {/* Admin Routes */}
        {/* <Route path='/admin' element={<AdminLoginPage />} /> */}
      </Routes>
    </div>
  )
}

export default App