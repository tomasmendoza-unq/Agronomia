import InsertForm from "@/shared/components/form/InsertForm";
import schema from "./types/schema";
import createUserInputs from "./types/inputs";
import type { InferData } from "@/shared/components/credentials-form/types/shema";
import { usePutCompanyData } from "@/features/admin/hook/use-put-company";
import type { Company } from "@/features/admin/types/Company";
import type { CompanyEdit } from "../../../../../../api/dto/CompanyEdit";

export const EditCompany = ({ company }: { company: Company }) => {
    const { editCompany } = usePutCompanyData();

    const handleSubmit = (data: InferData<typeof schema>) => {
        const companyEdit: CompanyEdit = {
            id: company.id,
            name: data.name,
            legalName: data.legalName,
            cuit: data.cuit,
            logo: data.logo[0],
        };

        editCompany(companyEdit);
    };

    return (
        <InsertForm
            inputsData={createUserInputs}
            buttonData={{ text: "Guardar" }}
            schema={schema}
            onSubmit={handleSubmit}
        />
    );
};
