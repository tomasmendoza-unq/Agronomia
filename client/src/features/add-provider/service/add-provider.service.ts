import http from "@/core/server/http-client";
import type { ProviderRequest } from "../types/ProviderRequest";
import type { Provider } from "../types/Provider";
import { PROVIDER_PATH } from "@/core/server/urls/provider";

async function addProvider(provider: ProviderRequest): Promise<Provider> {
    const response = await http.post<Provider>(PROVIDER_PATH, provider);
    return response.data;
}

export default addProvider;
