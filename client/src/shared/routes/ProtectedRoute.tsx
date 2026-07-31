import { Navigate } from "react-router";

export const ProtectedRoute = ({
    isAuthenticated,
    children,
}: {
    isAuthenticated: boolean;
    children: React.ReactNode;
}) => {
    if (!isAuthenticated)
        return (
            <Navigate
                to="/login"
                replace
            />
        );

    return children;
};
