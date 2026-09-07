import type { LegalEditRequest } from "../../api/dto/request/legalEditRequest";
import type { NaturalEditRequest } from "../../api/dto/request/naturalEditRequest";
import type { ClientToEdit } from "../../types/Client";
import { ClientOption } from "@/shared/domain/client/client";

export type ClientEditRequest = NaturalEditRequest | LegalEditRequest;

export function clientRequestAdapter(client: ClientToEdit): ClientEditRequest {
    if ("razonSocial" in client) {
        return {
            clientType: ClientOption.RAZON_SOCIAL,
            type: ClientOption.RAZON_SOCIAL,
            address: client.address ?? "",
            locate: client.location,
            province: client.province,
        };
    }

    return {
        clientType: ClientOption.NATURAL_PERSON,
        type: ClientOption.NATURAL_PERSON,
        phoneNumber: client.phone,
        email: client.email,
        address: client.address ?? "",
        locate: client.location,
        province: client.province,
    };
}
