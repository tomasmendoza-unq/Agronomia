import http from "@/core/server/http-client";
import type { Provider } from "../types/Provider";
import { PROVIDER_PATH } from "@/core/server/urls/provider";

export type PageResponseDTO<T> = {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
};

async function getProvidersService(
    page = 0,
    size = 5,
): Promise<PageResponseDTO<Provider>> {
    const response = await http.get<PageResponseDTO<Provider>>(PROVIDER_PATH, {
        params: { page, size },
    });
    return response.data;
}

export default getProvidersService;
