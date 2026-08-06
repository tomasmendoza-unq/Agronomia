import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import createUserInputs from "./types/inputs";
import createUserLinks from "./types/links";
import schema from "./types/schema";

interface CreateUserProps {
    onSubmit: () => void;
}

export const CreateUser = ({ onSubmit }: CreateUserProps) => (
    <CredentialsForm
        title="Crear nuevo usuario"
        inputs={createUserInputs}
        button={{text: "Crear usuario"}}
        links={createUserLinks}
        schema={schema}
        onSubmit={onSubmit}
    />
);

export default CreateUser;
