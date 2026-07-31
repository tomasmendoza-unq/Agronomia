import { Outlet } from "react-router";
import { authLayout } from "./styles";
import NavBar from "./components/navbar/Navbar";
import { links } from "./links";
import { UseAuth } from "@/shared/hooks/use-auth";
import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";
import Breadcrumb from "@/shared/components/breadcrumb/Breadcrumb";

const AuthenticatedLayout = () => {
    const { isAuthenticated, companyData } = UseAuth();
    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <NavBar
                // user={user}
                companyData={companyData}
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
