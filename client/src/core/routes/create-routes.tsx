import { createBrowserRouter } from "react-router";
import { AdminRoutes } from "./admin/routes";
import { FacturacionRoutes } from "./facturacion/routes";
import loginRoutes from "./login/routes";
import { VendedorRoutes } from "./vendedor/routes";

export const routes = createBrowserRouter([
    ...loginRoutes,
    ...AdminRoutes,
    ...FacturacionRoutes,
    ...VendedorRoutes,
]);
