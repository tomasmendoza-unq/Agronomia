import { useState } from "react";
import type { UseFetch } from "./use-fetch";
import { HttpError } from "@/core/server/errors/http-error";

function useFetch<D>(): UseFetch<D> {
    const [data, setData] = useState<D>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<HttpError>();

    function execute<Args extends unknown[]>(request: (...args: Args) => Promise<D>) {
        
        return async (...args: Args) => {
            setIsLoading(true);

            try {
                setData(await request(...args));
            } catch(error: unknown) {
                handleError(error);
            }

            setIsLoading(false);
        }
    }

    function handleError(error: unknown) {
        if (error instanceof HttpError) {
            setError(error);
        }
    }

    function refresh() {
        setData(undefined);
        setError(undefined);
    }

    return { data, isLoading, error, execute, refresh }
}

export default useFetch;