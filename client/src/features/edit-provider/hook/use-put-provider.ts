import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import { putProvider } from "../service/put-provider.service";
import type { Provider } from "../types/Provider";

export const usePutProviderData = () => {
    const { data, error, isLoading, execute, refresh } = useFetch<Provider>();
    return {
        data,
        error,
        isLoading,
        editProvider: execute(putProvider),
        refresh,
    };
};
