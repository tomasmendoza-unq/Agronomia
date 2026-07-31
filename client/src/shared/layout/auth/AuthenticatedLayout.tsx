import { Outlet } from "react-router";
import { authLayout } from "./styles";

const AuthenticatedLayout = () => {
    return (
        // <ProtectedRoute>
        <main className={authLayout}>
            <Outlet />
        </main>
        // </ProtectedRoute>
    );
};

export default AuthenticatedLayout;
