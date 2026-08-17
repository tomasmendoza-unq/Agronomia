import DataField from "@/shared/components/dataField/DataField";
import { editButton } from "./styles";
import { getCompanyFields } from "./types/fieldsCard";
import SupplierCard from "@/shared/components/supplierCard/SupplierCard";
import type { Company } from "@/features/admin/types/Company";
import { useState } from "react";
import Modal from "@/shared/components/modal/Modal";

interface CompanyDataCardProps {
    companyData: Company;
}

const CompanyDataCard = ({ companyData }: CompanyDataCardProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const fields = getCompanyFields(companyData);
    return (
        <SupplierCard>
            <button
                className={editButton}
                onClick={handleEdit}
            >
                Editar
            </button>
            {fields.map((field) => (
                <DataField
                    key={field.label}
                    {...field}
                />
            ))}

            <Modal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
            >
                <div></div>
            </Modal>
        </SupplierCard>
    );
};

export default CompanyDataCard;
