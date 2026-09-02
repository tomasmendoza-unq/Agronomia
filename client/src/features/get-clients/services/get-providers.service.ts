import http from "@/core/server/http-client";
import type { Client } from "../domain/client";
import type { Page } from "@/shared/types/page/Page";
import { CLIENT_PATH } from "@/core/server/urls/client";

async function getClients(
    page = 0,
    name = "",
): Promise<Page<Client>> {
    const response = await http.get<Page<Client>>(CLIENT_PATH, {
        params: { page, name },
    });
    return response.data;
}

export default getClients;
