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

export const EditClient = () => {
    const { clientId } = useParams<{ clientId: string }>();
    const { data: client, error, loading, getClientById } = useGetClientById();

    useEffect(() => {
        if (clientId) {
            getClientById(Number(clientId));
        }
    }, [clientId, getClientById]);

    if (loading || !client) {
        return <p>{error ? error.message : "Cargando cliente..."}</p>;
    }

    const isLegalClient = "razonSocial" in client;
    const naturalPersonForms = generateNaturalPersonSubForms(client);
    const socialMotiveForms = generateSocialMotiveSubForms(client);

    return (
        <PolimorficForm
            options={[
                {
                    subType: "razon social",
                    subforms: socialMotiveForms,
                    schema: socialMotiveSchema,
                    onSubmit: (data) => console.log(data),
                },
                {
                    subType: "persona natural",
                    subforms: naturalPersonForms,
                    schema: naturalPersonSchema,
                    onSubmit: (data) => console.log(data),
                },
            ]}
            initialSubType={isLegalClient ? "razon social" : "persona natural"}
            disableOptions
            buttonData={{ text: "Guardar cambios" }}
            onCancel={() => undefined}
        />
    );
};
