import AuthenticatedLayout from "@/features/auth/layout/AuthenticatedLayout";
import { links } from "./links";

const FacturacionLayout = () => {
    return (
        <AuthenticatedLayout
            links={links}
            avatarTo={"/facturacion"}
            allowedRoles={["FACTURACION"]}
        />
    );
};

export default FacturacionLayout;
