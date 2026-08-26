import { ADMIN_ROUTES } from "../../../routes/admin/paths";
import { links } from "./links";
import AuthenticatedLayout from "../AuthenticatedLayout";

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
