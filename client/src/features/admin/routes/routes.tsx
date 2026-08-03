import type { RouteData } from "@/core/routes/route-data";
import Configuration from "../pages/configuration/Configuration";
import AuthenticatedLayout from "../../auth/layout/AuthenticatedLayout";
import { ADMIN_ROUTES } from "@/core/routes/admin";

export const adminRoutes: RouteData[] = [
    {
        path: `${ADMIN_ROUTES.BASE}`,
        element: <AuthenticatedLayout />,
        handle: { breadcrumb: "Inicio" },
        children: [
            {
                path: `${ADMIN_ROUTES.CONFIGURATION}`,
                element: <Configuration />,
                handle: { breadcrumb: "Configuración" },
            },
            {
                path: `${ADMIN_ROUTES.PROVEEDORES}`,
                element: <Configuration />,
                handle: { breadcrumb: "Proveedores" },
            },
        ],
    },
];
