import { RouterProvider } from "react-router";
import { routes } from "./core/routes/create-routes";
import AuthProvider from "./features/auth/context/auth.provider";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    );
}

export default App;
