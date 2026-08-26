import { ADMIN_ROUTES } from "../../../core/routes/admin/paths";
import type { linkNavbar } from "../../../core/auth/layout/components/protected-routes/link";

export const links: linkNavbar[] = [
    { name: "Inicio", path: ADMIN_ROUTES.BASE },
    { name: "Proveedores", path: ADMIN_ROUTES.PROVEEDORES },
    { name: "Clientes", path: ADMIN_ROUTES.CLIENTES },
    { name: "Productos", path: ADMIN_ROUTES.PRODUCTOS },
    { name: "Ventas", path: ADMIN_ROUTES.VENTAS },
];
