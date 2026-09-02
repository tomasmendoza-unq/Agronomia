import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import useAddClient from "../hooks/use-add-client";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";
import { useState } from "react";
import type { ClientSchema } from "../adapter/client-schema";

const AddClient = () => {

    const {add, refresh, data, isError} = useAddClient();
    const [client, setClient] = useState<ClientSchema>();

    const handleClient = (clientData: ClientSchema) => {
        setClient(clientData);
        add(clientData);
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
                onCancel={() => console.log("aa")}
            />
            {isError && <ErrorToast message={`El cuit ${client?.cuit} ya está registrado`} onClose={refresh} />}
            {data && <SuccessToast message={`Se ha creado el cliente ${client?.name} ${client?.surname}`} onClose={refresh} />}
        </>
    )
}

export default AddClient;