import type { RouteData } from "@/core/routes/route-data";
import { FACTURACION_ROUTES } from "./paths";
import FacturacionLayout from "../../auth/layout/roles/facturacion/FacturacionLayout";

export const FacturacionRoutes: RouteData[] = [
    {
        path: `${FACTURACION_ROUTES.BASE}`,
        element: <FacturacionLayout />,
        handle: { breadcrumb: "Inicio" },
    },
];
