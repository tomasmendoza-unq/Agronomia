import http from "@/core/server/http-client";
import type { Provider } from "../types/Provider";
import { PROVIDER_PATH_BY_ID } from "@/core/server/urls/provider";

export const getProviderById = async (
    providerId: number,
): Promise<Provider> => {
    const response = await http.get<Provider>(PROVIDER_PATH_BY_ID(providerId));
    return response.data;
};
