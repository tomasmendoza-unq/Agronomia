import type React from "react";
import AuthContext from "./auth.context";
import login from "../services/login";
import logout from "../services/logout";

interface AuthProviderProps {
    children: React.JSX.Element
}

function AuthProvider({ children }: AuthProviderProps) {
    const { data, error, isLoading, execute } = useFetch();

    const value = {
        user: data,
        error,
        isLoading,
        login: execute(login),
        logout: execute(logout)
    }

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;