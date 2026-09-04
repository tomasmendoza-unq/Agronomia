import { useCallback } from "react";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Provider } from "../types/Provider";
import { getProviderById as getProviderByIdService } from "../service/get-provider-by-id.service";

export const useGetProviderById = () => {
    const { data, error, isLoading, execute, refresh } = useFetch<Provider>();
    const getProviderById = useCallback(
        (id: number) => execute(getProviderByIdService)(id),
        [execute],
    );

    return {
        data,
        error,
        loading: isLoading,
        getProviderById,
        refresh,
    };
};
