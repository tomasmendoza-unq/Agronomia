import type { RouteData } from "@/core/routes/route-data";
import { VENDEDOR_ROUTES } from "./paths";
import VendedorLayout from "@/core/auth/layout/roles/vendedor/VendedorLayout";
import { ProviderPanel } from "@/views/provider/ProviderPanel";
import { ProvidersList } from "@/views/provider/components/ProviderList";

export const VendedorRoutes: RouteData[] = [
    {
        path: `${VENDEDOR_ROUTES.BASE}`,
        element: <VendedorLayout />,
        handle: { breadcrumb: "Inicio" },
        children: [
            {
                path: `${VENDEDOR_ROUTES.PROVEEDORES}`,
                element: <ProviderPanel />,
                handle: { breadcrumb: "Proveedores" },
                children: [
                    {
                        index: true,
                        element: <ProvidersList />,
                    },
                ],
            },
        ],
    },
];
