import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoutes = () => {
    const authUser = localStorage.getItem('access-token')
    const authRole = localStorage.getItem('role')

    return(
        authUser !== null && authRole === "Admin" ? <Outlet/> : <Navigate to = "/" />
    )
}

export default AdminPrivateRoutes