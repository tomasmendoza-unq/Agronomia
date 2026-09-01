import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";
import { ClientOption } from "../types/client";

const AddClient = () => {
    
    return (
        <PolimorficForm 
            options={[
                {
                    subType: ClientOption.RAZON_SOCIAL,
                    subforms: socialMotiveSubform,
                    schema: socialMotiveSchema,
                    onSubmit: () => console.log("aa")
                },
                {
                    subType: ClientOption.NATURAL_PERSON,
                    subforms: naturalPersonsubForms,
                    schema: naturalPersonSchema,
                    onSubmit: () => console.log("aa")
                }
            ]}
            buttonData={{text: "Agregar cliente"}}
            onCancel={() => console.log("aa")}
        />
    )
}

export default AddClient;