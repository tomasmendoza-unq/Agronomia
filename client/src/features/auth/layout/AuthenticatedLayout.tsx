import { Outlet } from "react-router";
import NavBar from "../../../shared/components/navbar/Navbar";
import { links } from "./types/links";
import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";
import Breadcrumb from "@/shared/components/breadcrumb/Breadcrumb";
import { authLayout } from "./styles";
import Brand from "./components/Brand";
import Avatar from "./components/Avatar";
import { useAuth } from "../hooks/use-auth";

const AuthenticatedLayout = () => {
    const { user, isAuthenticated } = useAuth();

    if (!user) return null;

    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <NavBar
                brand={<Brand companyLogo={user.companyLogo} />}
                avatar={<Avatar avatar={user} />}
                links={links}
            />
            <main className={authLayout}>
                <Breadcrumb />
                <Outlet />
            </main>
        </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
