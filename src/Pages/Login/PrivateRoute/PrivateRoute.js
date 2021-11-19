import { CircularProgress } from "@mui/material";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from '../../../Hooks/useAuth'
const PrivateRoute = () => {
    const location = useLocation();
    const { user, isLoading } = useAuth();

    if (!isLoading && !user.email) {
        return <Navigate to="/login" state={{ from: location }} />

    }
    else if (user.email) {
        return (<Outlet />)
    }
    else {
        return <CircularProgress />
    }
}
export default PrivateRoute;