import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetProviderById } from "../hook/use-get-provider-by-id";
import { usePutProviderData } from "../hook/use-put-provider";
import ComposeForm from "@/shared/components/forms/compose-form/ComposeForm";
import providerSchema from "./types/provider-edit-schema";
import { generateSubForm } from "./types/input";
import type { ProviderEdit } from "../api/dto/ProviderEdit";
import Spinner from "@/shared/components/spinner/Spinner";
import { ConfirmModal } from "@/shared/components/modal/variants/ConfirmModalProps";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { css } from "@styled-system/css";

const backButtonContainer = css({
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: "24px",
});

export const EditProvider = () => {
    const { error, isLoading, editProvider } = usePutProviderData();
    const { providerId } = useParams<{ providerId: string }>();
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    const navigate = useNavigate();

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

    const backToProviders = () => {
        navigate(-1);
    };

    if (isLoadingProvider || data === undefined) {
        return null;
    }

    if (error || errorProvider) {
        return null;
    }

    const generatedSubForm = generateSubForm(data);

    const onSubmit = async (formData: Omit<ProviderEdit, "id">) => {
        const updatedProvider = await editProvider({
            id: data.id,
            ...formData,
        });

        if (updatedProvider) {
            navigate("/admin/proveedores", {
                state: { providerUpdated: true },
            });
        }
    };

    const cancelEdit = () => {
        setIsCancelOpen(false);
        navigate(-1);
    };

    return (
        <>
            <div className={backButtonContainer}>
                <Button
                    color="white"
                    hoverColor={token("colors.primaryColorHover") + "20"}
                    borderColor={token("colors.primaryColor")}
                    textColor={token("colors.primaryColor")}
                    onClick={backToProviders}
                >
                    ← Regresar
                </Button>
            </div>
            {isLoading ? (
                <Spinner
                    size="lg"
                    centered
                />
            ) : (
                <ComposeForm
                    subForms={generatedSubForm}
                    schema={providerSchema}
                    buttonData={{ text: "Editar proveedor" }}
                    onSubmit={onSubmit}
                    onCancel={() => setIsCancelOpen(true)}
                />
            )}
            <ConfirmModal
                isOpen={isCancelOpen}
                title="¿Seguro deseas cancelar?"
                message="Si cancelas perderás los cambios realizados."
                confirmText="Abandonar"
                cancelText="Continuar editando"
                danger
                onConfirm={backToProviders}
                onCancel={() => cancelEdit()}
            />
        </>
    );
};
