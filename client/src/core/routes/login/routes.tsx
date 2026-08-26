import Login from "@/features/login/pages/init/Login";
import type { RouteData } from "../route-data";
import { LOGIN } from "./paths";

const loginRoutes: RouteData = {
    path: LOGIN.INIT,
    element: <Login />,
    children: []
}

export default loginRoutes;