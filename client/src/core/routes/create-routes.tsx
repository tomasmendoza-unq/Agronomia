import { createBrowserRouter } from "react-router";
import { authRoutes } from "../../features/auth/routes/routes";
import { adminRoutes } from "../../features/admin/routes/routes";

export const routes = createBrowserRouter([...authRoutes, ...adminRoutes]);
