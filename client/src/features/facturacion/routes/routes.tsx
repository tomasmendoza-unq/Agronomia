import type { RouteData } from "@/core/routes/route-data";
import FacturacionLayout from "../layout/FacturacionLayout";
import { FACTURACION_ROUTES } from "@/core/routes/facturacion";

export const FacturacionRoutes: RouteData[] = [
    {
        path: `${FACTURACION_ROUTES.BASE}`,
        element: <FacturacionLayout />,
        handle: { breadcrumb: "Inicio" },
        children: [],
    },
];
