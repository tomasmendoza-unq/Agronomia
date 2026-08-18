import { useState } from "react";
import createUserInputs from "./types/inputs";
import createUserLinks from "./types/links";
import schema from "./types/schema";
import type { z } from "zod";
import type { Branch } from "@/features/admin/types/Branch";
import { useMemo } from "react";

import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";
import { useRegister } from "@/features/admin/hook/use-register";
import type { RegisterRequest } from "@/features/admin/api/dto/RegisterRequest";
import CredentialsForm from "@/shared/components/credentials-form/CredentialsForm";

export type CreateUserFormData = z.infer<typeof schema>;

interface CreateUserProps {
    companyId: number;
    branches: Branch[];
    onUserCreated: () => void;
    onClose: () => void;
}

export const CreateUser = ({
    companyId,
    branches = [],
    onUserCreated,
    onClose,
}: CreateUserProps) => {
    const { register, registerError, refresh, isLoading } = useRegister();
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const inputs = useMemo(() => createUserInputs(branches), [branches]);

    const handleCreateUser = async (data: CreateUserFormData) => {
        if (!companyId) return;

        const userRegister: RegisterRequest = {
            ...data,
            id_branch: Number(data.branch),
            id_company: companyId,
        };

        await register(userRegister);

        onUserCreated();
        onClose();
        setShowSuccessToast(true);
    };

    return (
        <>
            <CredentialsForm
                title="Crear nuevo usuario"
                isLoading={isLoading}
                inputs={inputs}
                button={{ text: "Crear usuario" }}
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

            {showSuccessToast && !registerError && (
                <SuccessToast
                    message="Usuario registrado correctamente"
                    onClose={() => setShowSuccessToast(false)}
                />
            )}
        </>
    );
};

export default CreateUser;
