import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";
import addClient from "../services/add-client";

const AddClient = () => {
    return (
        <PolimorficForm 
            options={[
                {
                    subType: "razon social",
                    subforms: socialMotiveSubform,
                    schema: socialMotiveSchema,
                    onSubmit: addClient
                },
                {
                    subType: "persona natural",
                    subforms: naturalPersonsubForms,
                    schema: naturalPersonSchema,
                    onSubmit: addClient
                }
            ]}
            buttonData={{text: "Agregar cliente"}}
            onCancel={() => console.log("aa")}
        />
    )
}

export default AddClient;