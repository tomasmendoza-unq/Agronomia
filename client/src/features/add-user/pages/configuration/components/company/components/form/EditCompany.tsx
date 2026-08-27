import schema from "./types/schema";
import createUserInputs from "./types/inputs";
import type { InferData } from "@/shared/components/credentials-form/types/shema";
import { h1 } from "./styles";
import type { Company } from "@/features/add-user/types/Company";
import type { CompanyEdit } from "@/features/add-user/api/dto/CompanyEdit";
import SimpleForm from "@/shared/components/forms/simple-form/SimpleForm";

interface EditCompanyProps {
    company: Company;
    isLoading: boolean;
    onSubmit: (companyEdit: CompanyEdit) => Promise<void>;
    onCancel: () => void;
}

export const EditCompany = ({
    company,
    onSubmit,
    isLoading,
    onCancel,
}: EditCompanyProps) => {
    const handleSubmit = (data: InferData<typeof schema>) => {
        const companyEdit: CompanyEdit = {
            id: company.id,
            name: data.name,
            legalName: data.legalName,
            cuit: data.cuit,
            logo: data.logo[0],
        };

        return onSubmit(companyEdit);
    };

    return (
        <section>
            <h1 className={h1}>Editar datos de empresa</h1>
            <SimpleForm
                haveCancelOption={true}
                title="Editar datos de empresa"
                inputs={createUserInputs}
                isLoading={isLoading}
                buttonData={{ text: "Guardar cambios" }}
                schema={schema}
                onSubmit={handleSubmit}
            >
            </SimpleForm>
        </section>
    );
};
