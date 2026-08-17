import http from "@/core/server/http-client";
import type { Company } from "../types/Company";
import { PUT_COMPANY_PATH } from "@/core/server/urls/company";

export const putCompany = async (company: Company): Promise<Company> => {
    const response = await http.put<Company>(PUT_COMPANY_PATH, {
        data: company,
    });
    return response.data;
};
