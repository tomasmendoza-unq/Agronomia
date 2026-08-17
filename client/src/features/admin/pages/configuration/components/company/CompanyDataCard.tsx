import DataField from "@/shared/components/dataField/DataField";
import { editButton } from "./styles";
import { getCompanyFields } from "./types/fields";
import SupplierCard from "@/shared/components/supplierCard/SupplierCard";
import type { Company } from "@/features/admin/types/Company";

interface CompanyDataCardProps {
    companyData: Company;
}

const CompanyDataCard = ({ companyData }: CompanyDataCardProps) => {
    const fields = getCompanyFields(companyData);
    return (
        <SupplierCard>
            <button className={editButton}> Editar</button>
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
