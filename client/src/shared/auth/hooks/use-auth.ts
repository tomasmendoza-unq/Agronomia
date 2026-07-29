import type { User } from "@/shared/domain/user/user"
import type { Credentials } from "../types/credentials"
import type { HttpError } from "@/core/server/errors/http-error"

export interface UseAuth {
    user: User | null 
    isLoading: boolean 
    error: HttpError | null
    login: Promise<(credentials: Credentials) => Promise<void>> 
    logout: Promise<(credentials: Credentials) => Promise<void>> 
}