import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";

import type { ClientToEdit } from "../types/Client";
import putClient from "../service/put-client.service";

export const usePutClient = () => {
    const { error, data, isLoading, execute, refresh } =
        useFetch<ClientToEdit>();

    return {
        error,
        data,
        isLoading,
        editClient: execute(putClient),
        refresh,
    };
};
