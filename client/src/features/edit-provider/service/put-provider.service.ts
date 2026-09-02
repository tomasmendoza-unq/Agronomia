import http from "@/core/server/http-client";
import type { ProviderEdit } from "../api/dto/ProviderEdit";
import { PUT_PROVIDER_PATH } from "@/core/server/urls/provider";
import type { Provider } from "../types/Provider";

const toFormData = (provider: ProviderEdit): FormData => {
    const formData = new FormData();
    formData.append("id", String(provider.id));
    formData.append("phoneNumber", provider.phoneNumber);
    if (provider.travelerName && provider.travelerPhoneNumber) {
        formData.append("travelerName", provider.travelerName);
        formData.append("travelerPhone", provider.travelerPhoneNumber);
    }
    return formData;
};

export const putProvider = async (
    provider: ProviderEdit,
): Promise<Provider> => {
    const response = await http.put<Provider>(
        PUT_PROVIDER_PATH,
        toFormData(provider),
    );
    return response.data;
};
