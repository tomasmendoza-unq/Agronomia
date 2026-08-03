import Login from "../pages/init-login/Login";
import type { RouteData } from "../../../core/routes/route-data";
import { ACCOUNT_LOCKED, INIT_LOGIN } from "@/core/routes/login";

export const authRoutes: RouteData[] = [
    {
        path: INIT_LOGIN,
        element: <Login />
    },
    {
        path: ACCOUNT_LOCKED,
        element: <Login />
    }
]