import { useEffect } from "react";
import { useParams } from "react-router";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import naturalPersonSchema from "@/features/add-client/pages/types/natural-person-schema";
import socialMotiveSchema from "@/features/add-client/pages/types/social-motive-schema";
import {
    generateNaturalPersonSubForms,
    generateSocialMotiveSubForms,
} from "./types/subForms";
import { useGetClientById } from "../hook/use-get-client-by-id";
import { usePutClient } from "../hook/use-put-client";
import type { ClientSchema } from "@/features/add-client/adapter/client-schema";
import Spinner from "@/shared/components/spinner/Spinner";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";

export const EditClient = () => {
    const { clientId } = useParams<{ clientId: string }>();
    const {
        data: client,
        error: getClientError,
        loading,
        getClientById,
        refresh: refreshGetClient,
    } = useGetClientById();
    const {
        editClient,
        error: editClientError,
        isLoading: isEditing,
        refresh: refreshEditClient,
    } = usePutClient();

    useEffect(() => {
        if (clientId) {
            getClientById(Number(clientId));
        }
    }, [clientId, getClientById]);

    if (loading || !client) {
        return (
            <>
                <Spinner
                    size="lg"
                    centered
                />
                {getClientError && (
                    <ErrorToast
                        message={getClientError.message}
                        onClose={refreshGetClient}
                    />
                )}
            </>
        );
    }

    const isLegalClient = "razonSocial" in client;
    const naturalPersonForms = generateNaturalPersonSubForms(client);
    const socialMotiveForms = generateSocialMotiveSubForms(client);
    const handleSubmit = async (data: ClientSchema) => {
        await editClient({ ...data, id: client.id });
    };

    return (
        <>
            <PolimorficForm
                options={[
                    {
                        subType: "razon social",
                        subforms: socialMotiveForms,
                        schema: socialMotiveSchema,
                        onSubmit: handleSubmit,
                    },
                    {
                        subType: "persona natural",
                        subforms: naturalPersonForms,
                        schema: naturalPersonSchema,
                        onSubmit: handleSubmit,
                    },
                ]}
                initialSubType={
                    isLegalClient ? "razon social" : "persona natural"
                }
                disableOptions
                buttonData={{ text: "Guardar cambios" }}
                onCancel={() => undefined}
            />
            {isEditing && (
                <Spinner
                    size="lg"
                    centered
                />
            )}
            {editClientError && (
                <ErrorToast
                    message={editClientError.message}
                    onClose={refreshEditClient}
                />
            )}
        </>
    );
};
