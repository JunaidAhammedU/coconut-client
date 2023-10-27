import React from 'react'
import { Navigate } from "react-router-dom";


const AdminAuthProtect = ({ element }) => {
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (admin) {
        return <Navigate to={'/admin/dashboard'} replace />
    }
    return <>{element}</>
}

export default AdminAuthProtect