import { LOGIN } from "@/core/routes/login";
import Login from "../Login";
import type { RouteData } from "@/shared/types/route-data";

export const loginRoutes: RouteData[] = [
    {
        path: LOGIN,
        element: <Login />
    }
]