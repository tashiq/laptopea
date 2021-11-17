import { CircularProgress } from "@mui/material";
import { Navigate, Outlet, Route, useLocation } from "react-router";
import useAuth from '../../../Hooks/useAuth'
const PrivateRoute = () => {
    const location = useLocation();
    const { user, isLoading, error } = useAuth();
    console.log(user);
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