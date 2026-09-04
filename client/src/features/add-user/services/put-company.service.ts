import http from "@/core/server/http-client";
import type { Company } from "../types/Company";
import { PUT_COMPANY_PATH } from "@/core/server/urls/company";
import type { CompanyEdit } from "../api/dto/CompanyEdit";

const toFormData = (company: CompanyEdit): FormData => {
    const formData = new FormData();
    formData.append("id", String(company.id));
    formData.append("name", company.name);
    formData.append("legalName", company.legalName);
    formData.append("cuit", company.cuit);
    formData.append("logo", company.logo);
    return formData;
};

export const putCompany = async (company: CompanyEdit): Promise<Company> => {
    const response = await http.put<Company>(
        PUT_COMPANY_PATH,
        toFormData(company),
    );
    return response.data;
};
