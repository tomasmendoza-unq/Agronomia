import DataField from "@/shared/components/dataField/DataField";
import { editButton } from "./styles";
import { getCompanyFields } from "./types/fieldsCard";
import SupplierCard from "@/shared/components/supplierCard/SupplierCard";
import type { Company } from "@/features/admin/types/Company";
import { useState } from "react";
import Modal from "@/shared/components/modal/Modal";
import { EditCompany } from "./components/form/EditCompany";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import { usePutCompanyData } from "@/features/admin/hook/use-put-company";
import type { CompanyEdit } from "@/features/admin/api/dto/CompanyEdit";

interface CompanyDataCardProps {
    companyData: Company;
    onCompanyUpdated: () => void;
}

const CompanyDataCard = ({
    companyData,
    onCompanyUpdated,
}: CompanyDataCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const {
        editCompany,
        error: editCompanyError,
        companyLoading,
        refresh,
    } = usePutCompanyData();

    const handleEdit = () => setIsEditing((prev) => !prev);

    const handleSubmit = async (companyEdit: CompanyEdit) => {
        await editCompany(companyEdit);
        onCompanyUpdated();
        setIsEditing(false);
        setShowSuccessToast(true);
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
                <EditCompany
                    company={companyData}
                    isLoading={companyLoading}
                    onSubmit={handleSubmit}
                    onCancel={() => setIsEditing(false)}
                />
            </Modal>

            {editCompanyError && (
                <ErrorToast
                    message={editCompanyError.message}
                    onClose={refresh}
                />
            )}

            {showSuccessToast && !editCompanyError && (
                <SuccessToast
                    message="Empresa editada correctamente"
                    onClose={() => setShowSuccessToast(false)}
                />
            )}
        </SupplierCard>
    );
};

export default CompanyDataCard;
