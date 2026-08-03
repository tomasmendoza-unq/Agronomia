import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import createUserInputs from "./types/inputs";
import createUserButton from "./types/button";
import createUserLinks from "./types/links";

interface CreateUserProps {
    onSubmit: () => void;
}

export const CreateUser = ({ onSubmit }: CreateUserProps) => (
    <CredentialsForm
        title="Crear nuevo usuario"
        inputs={createUserInputs}
        button={createUserButton(onSubmit)}
        links={createUserLinks}
        compact={true}
    />
);

export default CreateUser;
