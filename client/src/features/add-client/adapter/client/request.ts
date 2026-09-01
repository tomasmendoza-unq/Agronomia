import type { ClientOption } from "../../types/client";
import type { ClientSchema } from "./client-schema";

export type ClientRequest = ClientSchema & { type: ClientOption};

export function clientRequestAdapter(schema: ClientSchema): ClientRequest {
    if(schema instanceof SocialMotiveSchema) {

    }
}