import { useCallback } from "react";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Provider } from "../types/Provider";
import getProvidersService from "../services/get-providers.service";
import type { Page } from "@/shared/types/page/Page";

export const useGetProviders = () => {
    const { data, error, isLoading, execute, refresh } =
        useFetch<Page<Provider>>();
    const getProviders = useCallback(
        (page: number, search: string) =>
            execute(getProvidersService)(page, search),
        [execute],
    );

    return {
        data,
        error,
        loading: isLoading,
        getProviders,
        refresh,
    };
};
