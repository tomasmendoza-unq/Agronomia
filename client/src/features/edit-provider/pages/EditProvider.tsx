import { useEffect } from "react";
import { useParams } from "react-router";
import { useGetProviderById } from "../hook/use-get-provider-by-id";
import { usePutProviderData } from "../hook/use-put-provider";
import ComposeForm from "@/shared/components/forms/compose-form/ComposeForm";
import providerSchema from "./types/provider-edit-schema";
import { generateSubForm } from "./types/input";
import type { ProviderEdit } from "../api/dto/ProviderEdit";

export const EditProvider = () => {
    const { error, isLoading, editProvider } = usePutProviderData();
    const { providerId } = useParams<{ providerId: string }>();

    const {
        data,
        loading: isLoadingProvider,
        error: errorProvider,
        getProviderById,
    } = useGetProviderById();

    useEffect(() => {
        if (providerId) {
            getProviderById(Number(providerId));
        }
    }, [getProviderById, providerId]);

    if (isLoading || isLoadingProvider || data === undefined) {
        return null;
    }

    if (error || errorProvider) {
        return null;
    }

    const generatedSubForm = generateSubForm(data);

    const onSubmit = (formData: Omit<ProviderEdit, "id">) => {
        console.log("formData", formData);
        editProvider({
            id: data.id,
            ...formData,
        });
    };

    return (
        <ComposeForm
            subForms={generatedSubForm}
            schema={providerSchema}
            buttonData={{ text: "Editar proveedor" }}
            onSubmit={onSubmit}
            onCancel={() => {}}
        />
    );
};
