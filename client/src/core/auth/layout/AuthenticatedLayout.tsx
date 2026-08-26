import MainContainer from "@/shared/components/main-container/MainContainer";
import type { linkNavbar } from "./components/protected-routes/link";
import { useAuth } from "../hooks/use-auth";
import { ProtectedRoute } from "./components/protected-routes/ProtectedRoute";

interface AuthenticatedLayoutProps {
    links: linkNavbar[];
    avatarTo: string;
    allowedRoles?: string[];
}

const AuthenticatedLayout = ({
    links,
    avatarTo,
    allowedRoles,
}: AuthenticatedLayoutProps) => {
    const { user, isAuthenticated, isLoading } = useAuth();

    return (
        <ProtectedRoute
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
            userRole={user?.role}
            allowedRoles={allowedRoles}
        >
            {user && <MainContainer user={user} links={links} avatarTo={avatarTo}/>}
        </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
