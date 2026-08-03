import Login from "../pages/init/Login";
import type { RouteData } from "../../../core/routes/route-data";
import { ACCOUNT_LOCKED, INIT_LOGIN } from "@/core/routes/login";

export const loginRoutes: RouteData[] = [
    {
        path: INIT_LOGIN,
        element: <Login />
    },
    {
        path: ACCOUNT_LOCKED,
        element: <Login />
    }
]