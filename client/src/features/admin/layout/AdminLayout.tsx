import { ADMIN_ROUTES } from "@/core/routes/admin";
import AuthenticatedLayout from "@/features/auth/layout/AuthenticatedLayout";
import { links } from "./links";

const AdminLayout = () => {
    return (
        <AuthenticatedLayout
            links={links}
            avatarTo={ADMIN_ROUTES.CONFIGURATION}
            allowedRoles={["DUENIO"]}
        />
    );
};

export default AdminLayout;
