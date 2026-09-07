import http from "@/core/server/http-client";
import { CLIENT_PATH_BY_ID } from "@/core/server/urls/client";
import type { ClientToEdit } from "../types/Client";

export const getClientById = async (
    clientId: number,
): Promise<ClientToEdit> => {
    const response = await http.get<ClientToEdit>(CLIENT_PATH_BY_ID(clientId));
    return response.data;
};
