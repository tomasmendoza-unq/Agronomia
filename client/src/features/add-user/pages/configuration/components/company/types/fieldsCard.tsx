import WrapLogo from "@/shared/components/wrapLogo/WrapLogo";
import type { ReactNode } from "react";
import { branch } from "../styles";
import type { Company } from "@/features/add-user/types/Company";

interface CompanyField {
    label: string;
    value: string | ReactNode;
}

export const getCompanyFields = (company: Company): CompanyField[] => {
    return [
        { label: "Nombre", value: company.name },
        { label: "Razón Social", value: company.legalName },
        { label: "CUIT", value: company.cuit },
        {
            label: "Logo",
            value: <WrapLogo img={company.logo} />,
        },
        {
            label: "Sucursales",
            value: (
                <div className={branch}>
                    {company.branches.map((branch) => (
                        <span key={branch.id}>
                            {branch.city} - {branch.street}
                        </span>
                    ))}
                </div>
            ),
        },
    ];
};
