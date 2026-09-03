import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Provider } from "../types/Provider";
import putProvider from "../service/put-provider.service";

export const usePutProviderData = () => {
    const { error, isLoading, execute, refresh } = useFetch<Provider>();
    return {
        error,
        isLoading,
        editProvider: execute(putProvider),
        refresh,
    };
};
