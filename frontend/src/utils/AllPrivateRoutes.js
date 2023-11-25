import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export const AllPrivateRoutes = () => {
    const authUser = localStorage.getItem('access-token')

    return(
        authUser !== null? <Outlet/> : <Navigate to = "/" />
    )
}
