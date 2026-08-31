import http from "@/core/server/http-client";
import type { Provider } from "../types/Provider";
import { PROVIDER_PATH } from "@/core/server/urls/provider";
import type { Page } from "@/shared/types/page/Page";

async function getProvidersService(
    page = 0,

    name = "",
): Promise<Page<Provider>> {
    const response = await http.get<Page<Provider>>(PROVIDER_PATH, {
        params: { page, name },
    });
    return response.data;
}

export default getProvidersService;
