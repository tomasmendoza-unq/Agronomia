import type { RouteData } from "@/core/routes/route-data";
import Configuration from "../pages/configuration/Configuration";
import { ADMIN_ROUTES } from "@/core/routes/admin";
import AdminLayout from "../layout/AdminLayout";

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
