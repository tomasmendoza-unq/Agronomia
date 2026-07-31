import type { CompanyData } from "@/features/company/types/CompanyData.t";
import type { ReactNode } from "react";

interface CompanyField {
    label: string;
    value: string | ReactNode;
}

export const getCompanyFields = (companyData: CompanyData): CompanyField[] => {
    const { name, legalName, cuit, logo } = companyData;

    return [
        { label: "Nombre", value: name },
        { label: "Razón Social", value: legalName },
        { label: "CUIT", value: cuit },
        {
            label: "Logo",
            value: (
                <img
                    src={logo}
                    alt="Logo de la empresa"
                />
            ),
        },
    ];
};
