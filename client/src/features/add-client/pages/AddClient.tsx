import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import useAddClient from "../hooks/use-add-client";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";
import { useState } from "react";
import type { ClientSchema } from "../adapter/client-schema";
import useIsModal from "@/shared/hooks/use-is-modal";
import { ConfirmModal } from "@/shared/components/modal/variants/ConfirmModalProps";
import { ModalCreateClient } from "../components/modal-create-client/ModalCreateClient";

const AddClient = () => {

    const {add, refresh, data, isError} = useAddClient();
    const [client, setClient] = useState<ClientSchema>();
    const { isOpen, onOpenIs, backToPrev, refresh: r } = useIsModal();

    const handleClient = async (clientData: ClientSchema) => {
        setClient(clientData);
        const client = await add(clientData);
        if(client) onOpenIs(!!client, "confirm");
    }

    return (
        <>
            <PolimorficForm 
                options={[
                    {
                        subType: "razon social",
                        subforms: socialMotiveSubform,
                        schema: socialMotiveSchema,
                        onSubmit: handleClient
                    },
                    {
                        subType: "persona natural",
                        subforms: naturalPersonsubForms,
                        schema: naturalPersonSchema,
                        onSubmit: handleClient
                    }
                ]}
                buttonData={{text: "Agregar cliente"}}
                onCancel={(isdata) => onOpenIs(isdata, "advertence")}
            />
            <ConfirmModal
                isOpen={isOpen("advertence")}
                title="¿Seguro deseas cancelar?"
                message="Si cancelas perderás los cambios realizados."
                confirmText="Abandonar"
                cancelText="Continuar editando"
                danger
                onConfirm={backToPrev}
                onCancel={r}
            />
            
            <ModalCreateClient
                isOpen={isOpen("confirm")}
                onClose={backToPrev}
                title="Proveedor agregado"
                message="El proveedor ha sido agregado correctamente."
            />
            {isError && <ErrorToast message={`El cuit ${client?.cuit} ya está registrado`} onClose={refresh} />}
            {data && <SuccessToast message={`Se ha creado el cliente ${client?.name} ${client?.surname}`} onClose={refresh} />}
        </>
    )
}

export default AddClient;