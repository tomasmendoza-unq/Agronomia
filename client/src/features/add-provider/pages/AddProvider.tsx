import { useNavigate } from "react-router";
import ComposeForm from "@/shared/components/forms/compose-form/ComposeForm";
import providerSchema from "./types/provider-schema";
import { providerSubForms } from "./types/input";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import { useAddProviders } from "../hook/use-add-provider";
import Spinner from "@/shared/components/spinner/Spinner";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import { useState } from "react";
import type { ProviderRequest } from "../types/ProviderRequest";
import { ModalCreateProvider } from "./components/ModalCreateProvider";
import { ConfirmModal } from "@/shared/components/modal/variants/ConfirmModalProps";

const AddProvider = () => {
    const navigate = useNavigate();
    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [isCreateProviderModalOpen, setIsCreateProviderOpen] =
        useState(false);
    const { error, loading, addProvider } = useAddProviders();

    const onSubmit = async (data: ProviderRequest) => {
        const created = await addProvider(data);

        if (created) {
            setIsCreateProviderOpen(true);
        }
    };

    const onCloseCreateProviderModal = () => {
        setIsCreateProviderOpen(false);
        navigate(-1);
    };

    const backToProviders = () => {
        navigate(-1);
    };

    return (
        <>
            <Button
                color="white"
                hoverColor={token("colors.primaryColorHover") + "20"}
                borderColor={token("colors.primaryColor")}
                textColor={token("colors.primaryColor")}
                onClick={backToProviders}
            >
                Regresar
            </Button>
            {loading ? (
                <Spinner />
            ) : (
                <ComposeForm
                    subForms={providerSubForms}
                    schema={providerSchema}
                    buttonData={{ text: "Agregar proveedor" }}
                    onSubmit={onSubmit}
                    onCancel={() => setIsCancelOpen(true)}
                />
            )}
            {error && (
                <ErrorToast
                    message={error.message}
                    onClose={() => {}}
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
                onCancel={() => setIsCancelOpen(false)}
            />

            <ModalCreateProvider
                isOpen={isCreateProviderModalOpen}
                onClose={onCloseCreateProviderModal}
                title="Proveedor agregado"
                message="El proveedor ha sido agregado correctamente."
            />
        </>
    );
};

export default AddProvider;
