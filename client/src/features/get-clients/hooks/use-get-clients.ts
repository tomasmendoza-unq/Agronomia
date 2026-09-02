import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Client } from "../domain/client";
import getClients from "../services/get-providers.service";
import type { Page } from "@/shared/types/page/Page";

export const useGetClients = () => {
    const { data, error, isLoading, execute, refresh } =
        useFetch<Page<Client>>();
    return {
        data,
        error,
        loading: isLoading,
        getClients: execute(getClients),
        refresh,
    };
};
