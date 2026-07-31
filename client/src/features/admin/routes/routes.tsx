import type { RouteData } from "@/core/routes/route-data";
import Configuration from "../pages/configuration/Configuration";

export const adminRoutes: RouteData[] = [
    {
        path: "/admin/configuration",
        element: <Configuration />,
    },
];
