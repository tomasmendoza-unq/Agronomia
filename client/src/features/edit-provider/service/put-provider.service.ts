import http from "@/core/server/http-client";
import type { ProviderEdit } from "../api/dto/ProviderEdit";
import { PUT_PROVIDER_PATH } from "@/core/server/urls/provider";
import type { Provider } from "../types/Provider";

async function putProvider(provider: ProviderEdit): Promise<Provider> {
    const response = await http.put<Provider>(PUT_PROVIDER_PATH, provider);
    return response.data;
}

export default putProvider;
