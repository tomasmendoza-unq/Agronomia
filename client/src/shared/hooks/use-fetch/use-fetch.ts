import type { HttpError } from "@/core/server/errors/http-error"

export interface UseFetch<T> {
    user: T | null 
    error: HttpError | null
    isLoading: boolean
}