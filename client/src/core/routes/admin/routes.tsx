import type { RouteData } from "@/core/routes/route-data";
import { ADMIN_ROUTES } from "./paths";
import AdminLayout from "../../auth/layout/roles/admin/AdminLayout";
import Configuration from "@/features/add-user/pages/configuration/Configuration";
import ClientPanel from "@/views/client/ClientPanel";
import AddClient from "@/features/add-client/pages/AddClient";
import { ProviderPanel } from "@/views/provider/ProviderPanel";
import { ProvidersList } from "@/views/provider/pages/ProviderList";
import AddProvider from "@/features/add-provider/pages/AddProvider";

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
                path: `${ADMIN_ROUTES.PROVEEDORES}`,
                element: <ProviderPanel />,
                handle: { breadcrumb: "Proveedores" },
                children: [
                    {
                        index: true,
                        element: <ProvidersList />,
                    },
                    {
                        path: `nuevo-proveedor`,
                        element: <AddProvider />,
                        handle: { breadcrumb: "Nuevo Proveedor" },
                    },
                ],
            },
            {
                path: `${ADMIN_ROUTES.CLIENTES}`,
                element: <ClientPanel />,
                handle: { breadcrumb: "Cliente" },
                children: [
                    {
                        path: `nuevo-cliente`,
                        element: <AddClient />,
                        handle: { breadcrumb: "Nuevo Cliente" },
                    },
                ],
            },
        ],
    },
];
