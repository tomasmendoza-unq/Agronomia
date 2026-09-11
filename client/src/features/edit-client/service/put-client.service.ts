import http from "@/core/server/http-client";
import { clientRequestAdapter } from "../adapter/client/request";
import {
    clientResponseAdapter,
    type ClientResponse,
} from "../adapter/client/response";
import type { ClientToEdit } from "../types/Client";
import { CLIENT_PATH_BY_ID } from "@/core/server/urls/client";

async function putClient(client: ClientToEdit): Promise<ClientToEdit> {
    const response = await http.put<ClientResponse>(
        CLIENT_PATH_BY_ID(client.id),
        clientRequestAdapter(client),
        { params: { clientId: client.id } },
    );

    return clientResponseAdapter(response.data);
}

export default putClient;
