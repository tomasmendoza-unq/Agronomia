import { Outlet } from "react-router";
import NavBar from "../../../shared/components/navbar/Navbar";
import { links } from "./types/links";
import Breadcrumb from "@/shared/components/breadcrumb/Breadcrumb";
import { authLayout } from "./styles";
import Brand from "./components/Brand";
import Avatar from "./components/Avatar";
import { useAuth } from "../hooks/use-auth";
import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";

const AuthenticatedLayout = () => {
    const { user, isAuthenticated } = useAuth();

    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            {user &&
            <main className={authLayout}>
                <NavBar
                    brand={<Brand companyLogo={user.companyLogo} />}
                    avatar={<Avatar avatar={user} />}
                    links={links}
                />
                <Breadcrumb />
                <Outlet />
            </main>}
        </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
