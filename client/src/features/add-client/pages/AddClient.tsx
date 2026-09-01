import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";
import addClient from "../services/add-client";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";

const AddClient = () => {

    const {error, execute, refresh} = useFetch();

    return (
        <>
            <PolimorficForm 
                options={[
                    {
                        subType: "razon social",
                        subforms: socialMotiveSubform,
                        schema: socialMotiveSchema,
                        onSubmit: execute(addClient)
                    },
                    {
                        subType: "persona natural",
                        subforms: naturalPersonsubForms,
                        schema: naturalPersonSchema,
                        onSubmit: execute(addClient)
                    }
                ]}
                buttonData={{text: "Agregar cliente"}}
                onCancel={() => console.log("aa")}
            />
            {error && <ErrorToast message={"aa"} onClose={refresh} />}
        </>
    )
}

export default AddClient;