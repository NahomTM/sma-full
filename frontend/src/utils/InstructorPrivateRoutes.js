import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export const InstructorPrivateRoutes = () => {
    const authUser = localStorage.getItem('access-token')
    const authRole = localStorage.getItem('role')

    return(
        authUser !== null && authRole === "Instructor" ? <Outlet/> : <Navigate to = "/" />
    )
}
