import type { ClientOption } from "@/shared/domain/client/client";

export type LegalEditRequest = {
    type: typeof ClientOption.RAZON_SOCIAL;
    associateName: string;
    associateSurname: string;
    associatePhone: string;
    email: string;
    address: string;
    locate: string;
    province: string;
};
