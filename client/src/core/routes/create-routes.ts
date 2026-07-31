import { createBrowserRouter } from "react-router";
import { loginRoutes } from "@/features/login/routes/routes";
import { adminRoutes } from "@/features/admin/routes/routes";

export const routes = createBrowserRouter([...loginRoutes, ...adminRoutes]);
