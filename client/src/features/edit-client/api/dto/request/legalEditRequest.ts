import type { ClientOption } from "@/shared/domain/client/client";

export type LegalEditRequest = {
    type: typeof ClientOption.RAZON_SOCIAL;
    address: string;
    locate: string;
    province: string;
};
