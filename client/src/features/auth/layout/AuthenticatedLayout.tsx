import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";
import { useAuth } from "@/features/auth/hooks/use-auth";
import type { linkNavbar } from "@/shared/components/navbar/types/link";
import MainContainer from "@/shared/components/main-container/MainContainer";

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
