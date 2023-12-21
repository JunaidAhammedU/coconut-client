import React from 'react'
import { Routes,Route } from "react-router-dom";
import AdminProtectedRoutes from '../Common/protectedRoute/AdminProtectedRoute';
import AdminAuthProtect from '../Common/protectedRoute/AdminAuthProtect';
import AdminLandingPage from '../Pages/Admin/AdminLandingPage';
import AdminLoginPage from '../Pages/Admin/AdminLoginPage';
import UsersManagementPage from '../Pages/Admin/UsersManagementPage';
import CategoryManagementPage from '../Pages/Admin/CategoryManagementPage';
//------------------------------------------------------------------------------


const AdminRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<AdminProtectedRoutes element={<AdminLandingPage />} />} />
        <Route path="/login" element={<AdminAuthProtect element={<AdminLoginPage />} />}/>
        <Route path="/users" element={<AdminProtectedRoutes element={<UsersManagementPage />} />}/>
        <Route path="/category" element={ <AdminProtectedRoutes element={<CategoryManagementPage />} />}/>
    </Routes>

    </>
  )
}

export default AdminRoutes