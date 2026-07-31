import DataField from "@/shared/components/dataField/DataField";
import type { CompanyData } from "../../types/CompanyData.t";
import { editButton } from "./styles";
import { getCompanyFields } from "./types/fields";
import SupplierCard from "@/shared/components/supplierCard/SupplierCard";

interface CompanyDataCardProps {
    companyData: CompanyData;
}

const CompanyDataCard = ({ companyData }: CompanyDataCardProps) => {
    const fields = getCompanyFields(companyData);
    return (
        <SupplierCard>
            <button className={editButton}>Edit</button>
            {fields.map((field) => (
                <DataField
                    key={field.label}
                    {...field}
                />
            ))}
        </SupplierCard>
    );
};

export default CompanyDataCard;
