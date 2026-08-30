import type { RouteData } from "@/core/routes/route-data";
import { ADMIN_ROUTES } from "./paths";
import AdminLayout from "../../auth/layout/roles/admin/AdminLayout";
import Configuration from "@/features/add-user/pages/configuration/Configuration";
import ClientPanel from "@/views/client/ClientPanel";
import AddClient from "@/features/add-client/pages/AddClient";

export const AdminRoutes: RouteData[] = [
    {
        path: `${ADMIN_ROUTES.BASE}`,
        element: <AdminLayout />,
        handle: { breadcrumb: "Inicio" },
        children: [
            {
                path: `${ADMIN_ROUTES.CONFIGURATION}`,
                element: <Configuration />,
                handle: { breadcrumb: "Configuración" },
            },
            {
<<<<<<< HEAD
=======
                path: `${ADMIN_ROUTES.PROVEEDORES}`,
                element: <ListProvider />,
                handle: { breadcrumb: "Proveedores" },
            },
            {
>>>>>>> dev
                path: `${ADMIN_ROUTES.CLIENTES}`,
                element: <ClientPanel />,
                handle: { breadcrumb: "Cliente" },
                children: [
                    {
                        path: `nuevo-cliente`,
                        element: <AddClient />,
                        handle: { breadcrumb: "Nuevo Cliente" },
                    }
                ]
            }
        ],
    },
];
