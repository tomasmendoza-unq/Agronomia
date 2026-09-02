import http from "@/core/server/http-client";
import type { Client } from "../types/Client";
import { PROVIDER_PATH } from "@/core/server/urls/provider";
import type { Page } from "@/shared/types/page/Page";

async function getClients(
    page = 0,

    name = "",
): Promise<Page<Client>> {
    const response = await http.get<Page<Client>>(PROVIDER_PATH, {
        params: { page, name },
    });
    return response.data;
}

export default getClients;
