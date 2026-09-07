import http from "@/core/server/http-client";
import { CLIENT_PATH_BY_ID } from "@/core/server/urls/client";
import {
    clientResponseAdapter,
    type ClientResponse,
} from "../adapter/client/response";
import type { ClientToEdit } from "../types/Client";

export const getClientById = async (
    clientId: number,
): Promise<ClientToEdit> => {
    const response = await http.get<ClientResponse>(
        CLIENT_PATH_BY_ID(clientId),
        { params: { clientId } },
    );
    return clientResponseAdapter(response.data);
};
