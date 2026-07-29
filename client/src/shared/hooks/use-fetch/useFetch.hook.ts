import { useState } from "react";
import type { UseFetch } from "./use-fetch";
import { HttpError } from "@/core/server/errors/http-error";
import { useNavigate } from "react-router";

function useFetch<D>(): UseFetch<D> {
    const navegate = useNavigate();
    const [data, setData] = useState<D | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<HttpError | null>(null);

    async function execute<Args extends unknown[]>(request: (...args: Args) => Promise<D>) {
        
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
        if (error instanceof HttpError && error.getSideError === 'Server') {
            setError(error);
            navegate('/');
        }
    }

    return { data, isLoading, error, execute }
}

export default useFetch;