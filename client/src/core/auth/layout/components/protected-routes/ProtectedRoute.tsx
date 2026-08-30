import Spinner from "@/shared/components/spinner/Spinner";
import { Navigate } from "react-router";

interface Props {
    isAuthenticated: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    userRole?: string;
    allowedRoles?: string[];
    redirectTo?: string;
}

const hasRequiredRole = (userRole?: string, allowedRoles?: string[]) => {
    if (!allowedRoles || allowedRoles.length === 0) return true;
    return !!userRole && allowedRoles.includes(userRole);
};

export const ProtectedRoute = ({
    isAuthenticated,
    isLoading = false,
    children,
    userRole,
    allowedRoles,
    redirectTo = "/login",
}: Props) => {
    if (isLoading)
        return (
            <Spinner
                size="lg"
                centered
            />
        );
    if (!isAuthenticated)
        return (
            <Navigate
                to={redirectTo}
                replace
            />
        );
    if (!hasRequiredRole(userRole, allowedRoles))
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );

    return <>{children}</>;
};
