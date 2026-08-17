import InsertForm from "@/shared/components/form/InsertForm";
import schema from "./types/schema";
import createUserInputs from "./types/inputs";
import type { InferData } from "@/shared/components/credentials-form/types/shema";

export const EditCompany = () => {
    const handleSubmit = (data: InferData<typeof schema>) => {
        console.log(data);
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
