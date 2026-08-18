import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";
import createUserInputs from "./types/inputs";
import createUserLinks from "./types/links";
import schema from "./types/schema";
import type { z } from "zod";
import type { Branch } from "@/features/admin/types/Branch";
import { useMemo } from "react";

export type CreateUserFormData = z.infer<typeof schema>;

interface CreateUserProps {
    onSubmit: (user: CreateUserFormData) => void;
    branches: Branch[];
}

export const CreateUser = ({ onSubmit, branches = [] }: CreateUserProps) => {
    const inputs = useMemo(() => createUserInputs(branches), [branches]);

    return (
        <CredentialsForm
            title="Crear nuevo usuario"
            inputs={inputs}
            button={{ text: "Crear usuario" }}
            links={createUserLinks}
            schema={schema}
            onSubmit={onSubmit}
        />
    );
};
export default CreateUser;
