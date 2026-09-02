import type { Provider } from "@/features/get-providers/types/Provider";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import addProvider from "../service/add-provider.service";

export const useAddProviders = () => {
    const { data, error, isLoading, execute, refresh } = useFetch<Provider>();
    return {
        data,
        error,
        loading: isLoading,
        addProvider: execute(addProvider),
        refresh,
    };
};
