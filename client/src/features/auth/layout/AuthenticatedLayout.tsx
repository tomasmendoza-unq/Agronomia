import { Outlet } from "react-router";
import NavBar from "@/shared/components/navbar/Navbar";
import Breadcrumb from "@/shared/components/breadcrumb/Breadcrumb";
import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { authLayout } from "./styles";
import type { linkNavbar } from "@/shared/components/navbar/types/link";
import Brand from "./components/Brand";
import Avatar from "./components/Avatar";

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
            {user && (
                <main className={authLayout}>
                    <NavBar
                        brand={<Brand companyLogo={user.companyLogo} />}
                        avatar={
                            <Avatar
                                avatar={user}
                                to={avatarTo}
                            />
                        }
                        links={links}
                    />
                    <Breadcrumb />
                    <Outlet />
                </main>
            )}
        </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
