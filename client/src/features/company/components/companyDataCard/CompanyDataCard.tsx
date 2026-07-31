import DataField from "@/shared/components/dataField/DataField";
import type { CompanyData } from "../../types/CompanyData.t";
import { card } from "./styles";
import { getCompanyFields } from "./types/fields";

interface CompanyDataCardProps {
    companyData: CompanyData;
}

const CompanyDataCard = ({ companyData }: CompanyDataCardProps) => {
    const fields = getCompanyFields(companyData);
    return (
        <div className={card}>
            {fields.map((field) => (
                <DataField
                    key={field.label}
                    {...field}
                />
            ))}
        </div>
    );
};

export default CompanyDataCard;
