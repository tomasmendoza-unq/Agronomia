import { createBrowserRouter } from "react-router";
import { loginRoutes } from "../../features/login/routes/routes";
import { AdminRoutes } from "./admin/routes";
import { FacturacionRoutes } from "./facturacion/routes";

export const routes = createBrowserRouter([
    ...loginRoutes,
    ...AdminRoutes,
    ...FacturacionRoutes,
]);
