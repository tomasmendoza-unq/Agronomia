import type { User } from "@/shared/domain/user/user"
import type { Credentials } from "../types/credentials"
import type { HttpError } from "@/core/server/errors/http-error"
import { useContext } from "react"
import AuthContext from "../context/auth.context"

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('El contexto no está siendo colocado para el suscriptor');
    }

    return context;
}

export interface UseAuth {
    user: User | undefined 
    isLoading: boolean 
    error: HttpError | undefined
    login: (credentials: Credentials) => Promise<void>
    logout: (credentials: Credentials) => Promise<void>
}