import { Navigate, Outlet } from "react-router";
import useAuth from "../../../Hooks/useAuth";
const AdminRoute = () => {
    const { user } = useAuth();
    if (user.email && user.role) {
        return (<Outlet />)
    }
    else {
        return <Navigate to="/" />
    }
}
export default AdminRoute;