import type { ClientOption } from "@/shared/domain/client/client";

export type NaturalEditRequest = {
    type: typeof ClientOption.NATURAL_PERSON;
    phoneNumber: string;
    email: string;
    address: string;
    locate: string;
    province: string;
};
