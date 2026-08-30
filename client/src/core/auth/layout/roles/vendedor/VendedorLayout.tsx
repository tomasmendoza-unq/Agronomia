import AuthenticatedLayout from "../../AuthenticatedLayout";
import { links } from "../admin/links";

const VendedorLayout = () => {
    return (
        <AuthenticatedLayout
            links={links}
            avatarTo={"/vendedor"}
            allowedRoles={["VENDEDOR"]}
        />
    );
};

export default VendedorLayout;
