import http from "@/core/server/http-client";
import type { Company } from "../types/Company";
import { GET_COMPANY_PATH } from "@/core/server/urls/company";

export const getCompany = async (): Promise<Company> => {
    const response = await http.get<Company>(GET_COMPANY_PATH);
    console.log("response", response.data);
    return response.data;
};
