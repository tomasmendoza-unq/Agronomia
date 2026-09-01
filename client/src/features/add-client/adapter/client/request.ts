import { ClientOption } from "../../types/client";
import type { ClientSchema } from "../client-schema";

export type ClientRequest = ClientSchema & { type: ClientOption};

export function clientRequestAdapter(schema: ClientSchema): ClientRequest {
    if("razonSocial" in schema) {
        return {
            ...schema,
            type: ClientOption.RAZON_SOCIAL
        }
    }
    return {
        ...schema,
        type: ClientOption.NATURAL_PERSON
    }
}