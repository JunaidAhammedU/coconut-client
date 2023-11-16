import React from 'react'
import HomePage from './Pages/User/HomePage'
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/User/LoginPage';
import RegisterPage from './Pages/User/RegisterPage';
import PortectedRoute from './Common/protectedRoute/ProtectedRoutes'
import AuthProtected from './Common/protectedRoute/AuthProtected'
import OtpVerifyPage from './Pages/User/OtpVerifyPage'
import AdminLandingPage from './Pages/Admin/AdminLandingPage'
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import DashboardPage from './Pages/Admin/DashboardPage';
import AdminProtectedRoutes from './Common/protectedRoute/AdminProtectedRoute';
import AdminAuthProtect from './Common/protectedRoute/AdminAuthProtect'
import UserPage from './Pages/Admin/UserPage'
import UserProfilePage from './Pages/User/UserProfilePage'
import ExploreRecipePage from './Pages/User/ExploreRecipePage';
import RecipeDetailsPage from "./Pages/User/RecipeDetailsPage";
//------------------------------------------------------------------------------

const App = () => {
  return (
    <div>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<PortectedRoute element={<HomePage />} />} />
        <Route path="/login" element={<AuthProtected element={<LoginPage />} />} />
        <Route path="/register" element={<AuthProtected element={<RegisterPage />} />} />
        <Route path="/otp-verify" element={<OtpVerifyPage />} />
        <Route path='/user-profile' element={<PortectedRoute element={<UserProfilePage />} />} />
        <Route path='/explore-recipe' element={<ExploreRecipePage />} />
        <Route path='/recipedetails' element={<RecipeDetailsPage />} />

        {/* Admin Routes */}
        <Route path='/admin' element={ <AdminProtectedRoutes element={<AdminLandingPage />} />} />
        <Route path='/admin/login' element={<AdminAuthProtect  element={<AdminLoginPage />}/>} />
        <Route path='/admin/dashboard' element={<AdminProtectedRoutes element={<DashboardPage/>} />} />
        <Route path='/admin/users' element={<AdminProtectedRoutes element={<UserPage/>} />} />
      </Routes>
    </div>
  )
}

export default App