import type {
    ClientToEdit,
    LegalClientToEdit,
    NaturalClientToEdit,
} from "../../types/Client";

type NaturalClientResponse = {
    id: number;
    name: string;
    surname: string;
    phone: string;
    email?: string;
    cuit: string;
    address?: string;
    location: string;
    province: string;
};

type LegalClientResponse = {
    id: number;
    razonSocial: string;
    associateName: string;
    associateSurname: string;
    associatePhone: string;
    email?: string;
    cuit: string;
    address?: string;
    location: string;
    province: string;
};

export type ClientResponse = NaturalClientResponse | LegalClientResponse;

export function clientResponseAdapter(response: ClientResponse): ClientToEdit {
    if ("razonSocial" in response) {
        return legalClientAdapter(response);
    }

    return naturalClientAdapter(response);
}

function naturalClientAdapter(
    response: NaturalClientResponse,
): NaturalClientToEdit {
    return {
        id: response.id,
        cuit: response.cuit,
        name: response.name,
        surname: response.surname,
        phone: response.phone,
        email: response.email ?? "",
        address: response.address ?? "",
        location: response.location,
        province: response.province,
    };
}

function legalClientAdapter(response: LegalClientResponse): LegalClientToEdit {
    return {
        id: response.id,
        razonSocial: response.razonSocial,
        cuit: response.cuit,
        name: response.associateName,
        surname: response.associateSurname,
        phone: response.associatePhone,
        email: response.email ?? "",
        address: response.address ?? "",
        location: response.location,
        province: response.province,
    };
}
