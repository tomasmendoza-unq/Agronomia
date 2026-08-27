import createUserInputs from "./types/inputs";
import createUserLinks from "./types/links";
import schema from "./types/schema";
import type { z } from "zod";
import { useMemo } from "react";

import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import type { RegisterRequest } from "@/features/add-user/api/dto/RegisterRequest";
import { useRegister } from "@/features/add-user/hooks/use-register";
import type { Branch } from "@/features/add-user/types/Branch";
import SimpleForm from "@/shared/components/forms/simple-form/SimpleForm";

export type CreateUserFormData = z.infer<typeof schema>;

interface CreateUserProps {
    companyId: number;
    branches: Branch[];
    onUserCreated: (email: string) => void;
}

export const CreateUser = ({
    companyId,
    branches = [],
    onUserCreated,
}: CreateUserProps) => {
    const { register, registerError, refresh, isLoading } = useRegister();

    const inputs = useMemo(() => createUserInputs(branches), [branches]);

    const handleCreateUser = async (data: CreateUserFormData) => {
        if (!companyId) return;

        const userRegister: RegisterRequest = {
            ...data,
            id_branch: Number(data.branch),
            id_company: companyId,
        };

        const user = await register(userRegister);

        if (user) onUserCreated(data.email);
    };

    return (
        <>
            <SimpleForm
                title="Crear nuevo usuario"
                isLoading={isLoading}
                inputs={inputs}
                buttonData={{ text: "Crear usuario" }}
                haveCancelOption={false}
                links={createUserLinks}
                schema={schema}
                onSubmit={handleCreateUser}
            />

            {registerError && (
                <ErrorToast
                    message={registerError.message}
                    onClose={refresh}
                />
            )}
        </>
    );
};

export default CreateUser;
