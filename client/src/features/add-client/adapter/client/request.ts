import type { NaturalPersonSchema } from "../../pages/types/natural-person-schema";
import type { SocialMotiveSchema } from "../../pages/types/social-motive-schema";
import { ClientOption } from "../../types/client";
import type { ClientSchema } from "../client-schema";

export type NaturalPersonRequest = NaturalPersonSchema

export type RazonSocialRequest = Omit<SocialMotiveSchema, 'name' | 'surname' | 'phone'> & {
    associateName: string
    associateSurname: string
    associatePhone: string
}
export type ClientRequest = 
    NaturalPersonRequest & { type: ClientOption} | 
    RazonSocialRequest & { type: ClientOption};

export function clientRequestAdapter(schema: ClientSchema): ClientRequest {
    if("razonSocial" in schema) {
        const {name, surname, phone, ...d} = schema;
        return {
            ...d,
            associateName: name,
            associateSurname: surname,
            associatePhone: phone,
            type: ClientOption.RAZON_SOCIAL
        }
    }
    return {
        ...schema,
        type: ClientOption.NATURAL_PERSON
    }
}