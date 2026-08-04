import type React from "react";
import AuthContext from "./auth.context";
import login from "../services/login";
import logout from "../services/logout";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { User } from "@/shared/domain/user/user";

interface AuthProviderProps {
    children: React.JSX.Element;
}

function AuthProvider({ children }: AuthProviderProps) {
    const { data, error, isLoading, execute, refresh } = useFetch<User>();

    const value = {
        user: data,
        isLoading,
        error,
        refresh,
        isAuthenticated: !!data,
        login: execute(login),
        logout: execute(logout),
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
