import { useCallback } from "react";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { ClientToEdit } from "../types/Client";
import { getClientById as getClientByIdService } from "../service/get-client-by-id.service";

export const useGetClientById = () => {
    const { data, error, isLoading, execute, refresh } =
        useFetch<ClientToEdit>();
    const getClientById = useCallback(
        (id: number) => execute(getClientByIdService)(id),
        [execute],
    );

    return {
        data,
        error,
        loading: isLoading,
        getClientById,
        refresh,
    };
};
