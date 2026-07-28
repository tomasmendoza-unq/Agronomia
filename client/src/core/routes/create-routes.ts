import { createBrowserRouter } from "react-router";
import { loginRoutes } from "@/features/login/routes/routes";

export const routes = createBrowserRouter([
    ...loginRoutes
]);