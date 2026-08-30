import type { RouteData } from "@/core/routes/route-data";
import { FACTURACION_ROUTES } from "./paths";
import FacturacionLayout from "../../auth/layout/roles/facturacion/FacturacionLayout";
import { ListProvider } from "@/views/listProvider/ListProvider";

export const FacturacionRoutes: RouteData[] = [
    {
        path: `${FACTURACION_ROUTES.BASE}`,
        element: <FacturacionLayout />,
        handle: { breadcrumb: "Inicio" },
        children: [
            {
                path: `${FACTURACION_ROUTES.PROVEEDORES}`,
                element: <ListProvider />,
                handle: { breadcrumb: "Proveedores" },
            },
        ],
    },
];
