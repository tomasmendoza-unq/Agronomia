import type { LegalEditRequest } from "../../api/dto/request/legalEditRequest";
import type { NaturalEditRequest } from "../../api/dto/request/naturalEditRequest";
import type { ClientToEdit } from "../../types/Client";

export type ClientEditRequest = NaturalEditRequest | LegalEditRequest;

export function clientRequestAdapter(client: ClientToEdit): ClientEditRequest {
    if ("razonSocial" in client) {
        return {
            address: client.address ?? "",
            locate: client.location,
            province: client.province,
        };
    }

    return {
        phoneNumber: client.phone,
        email: client.email,
        address: client.address ?? "",
        locate: client.location,
        province: client.province,
    };
}
