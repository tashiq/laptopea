import { Navigate, Route } from "react-router";
import useAuth from '../../../Hooks/useAuth'
const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;