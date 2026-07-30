import type { HttpError } from "@/core/server/errors/http-error"

export interface UseFetch<D> {
    data: D | undefined 
    error: HttpError | undefined
    isLoading: boolean
    execute: <Args extends unknown[]>
        (request: (...args: Args) => Promise<D>) => 
            (...args: Args) => Promise<void>
}