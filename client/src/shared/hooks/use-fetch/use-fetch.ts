import type { HttpError } from "@/core/server/errors/http-error"

export interface UseFetch<D> {
    data: D | null 
    error: HttpError | null
    isLoading: boolean
    execute: <Args extends unknown[]>
        (request: (...args: Args) => Promise<D>) => 
            Promise<(...args: Args) => Promise<void>>
}