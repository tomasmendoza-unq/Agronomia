import { ADMIN_ROUTES } from "@/core/routes/admin";
import { FACTURACION_ROUTES } from "./facturacion";

export const ROLE_HOME_ROUTES: Record<string, string> = {
    DUENIO: ADMIN_ROUTES.BASE,
    FACTURACION: FACTURACION_ROUTES.BASE,
};

export const DEFAULT_HOME_ROUTE = "/unauthorized";
