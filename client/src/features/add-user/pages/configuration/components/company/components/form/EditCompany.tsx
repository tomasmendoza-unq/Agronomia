import InsertForm from "@/shared/components/form/InsertForm";
import schema from "./types/schema";
import createUserInputs from "./types/inputs";
import type { InferData } from "@/shared/components/credentials-form/types/shema";
import type { Company } from "@/features/admin/types/Company";
import type { CompanyEdit } from "@/features/admin/api/dto/CompanyEdit";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { h1 } from "./styles";

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
            <InsertForm
                inputsData={createUserInputs}
                isLoading={isLoading}
                buttonData={{ text: "Guardar cambios" }}
                schema={schema}
                onSubmit={handleSubmit}
            >
                <Button
                    type="button"
                    color="transparent"
                    hoverColor="transparent"
                    borderColor={token("colors.primaryColor")}
                    textColor={token("colors.primaryColorSubtle")}
                    onClick={onCancel}
                >
                    Cancelar
                </Button>
            </InsertForm>
        </section>
    );
};
