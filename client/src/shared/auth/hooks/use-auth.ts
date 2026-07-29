import type { User } from "@/shared/domain/user/user"
import type { Credentials } from "../types/credentials"
import type { HttpError } from "@/core/server/errors/http-error"

export interface UseAuth {
    user:  User | null 
    error: HttpError | null
    isLoading: boolean
    login: (credentials: Credentials) => Promise<User> 
    logout: () => Promise<void>
}