import { Navigate } from "react-router";

interface Props {
    isAuthenticated: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    userRole?: string;
    allowedRoles?: string[];
    redirectTo?: string;
}

export const ProtectedRoute = ({
    isAuthenticated,
    isLoading = false,
    children,
    userRole,
    allowedRoles,
    redirectTo = "/login",
}: Props) => {
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to={redirectTo}
                replace
            />
        );
    }

    if (allowedRoles && allowedRoles.length > 0) {
        if (!userRole || !allowedRoles.includes(userRole)) {
            return (
                <Navigate
                    to="/unauthorized"
                    replace
                />
            );
        }
    }

    return <>{children}</>;
};
