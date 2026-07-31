import { Outlet } from "react-router";
import { authLayout } from "./styles";
import NavBar from "./components/navbar/Navbar";
import { links } from "./links";
import { UseAuth } from "@/shared/hooks/use-auth";
import { ProtectedRoute } from "@/shared/routes/ProtectedRoute";

const AuthenticatedLayout = () => {
    const { isAuthenticated, companyData } = UseAuth();
    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <main className={authLayout}>
                <NavBar
                    companyData={companyData}
                    links={links}
                />
                <Outlet />
            </main>
        </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
