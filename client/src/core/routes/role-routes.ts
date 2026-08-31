import { ADMIN_ROUTES } from "./admin/paths";
import { FACTURACION_ROUTES } from "./facturacion/paths";
import { VENDEDOR_ROUTES } from "./vendedor/paths";

export const ROLE_HOME_ROUTES: Record<string, string> = {
    DUENIO: ADMIN_ROUTES.BASE,
    FACTURACION: FACTURACION_ROUTES.BASE,
    VENDEDOR: VENDEDOR_ROUTES.BASE,
};

export const DEFAULT_HOME_ROUTE = "/unauthorized";
