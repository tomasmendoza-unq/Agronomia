import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { Provider } from "../types/Provider";
import getProvidersService, {
    type PageResponseDTO,
} from "../services/get-providers.service";

export const useGetProviders = () => {
    const { data, error, isLoading, execute, refresh } =
        useFetch<PageResponseDTO<Provider>>();
    return {
        data,
        error,
        loading: isLoading,
        getProviders: execute(getProvidersService),
        refresh,
    };
};
