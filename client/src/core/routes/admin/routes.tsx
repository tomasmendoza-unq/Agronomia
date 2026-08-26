import type { RouteData } from "@/core/routes/route-data";
import Configuration from "../../../features/admin/pages/configuration/Configuration";
import { ADMIN_ROUTES } from "./paths";
import AdminLayout from "../../../features/admin/layout/AdminLayout";

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
        ],
    },
];
