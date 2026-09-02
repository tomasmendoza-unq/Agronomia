import type { ClientOption } from "@/shared/domain/client/client";

export interface Client {
    id: number;
    cuit: string;
    type: ClientOption;
};
