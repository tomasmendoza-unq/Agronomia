import { naturalPersonsubForms, socialMotiveSubform } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";
import socialMotiveSchema from "./types/social-motive-schema";

const AddClient = () => {
    
    return (
        <PolimorficForm 
            options={[
                {
                    subType: "persona natural",
                    subforms: naturalPersonsubForms,
                    schema: naturalPersonSchema,
                    onSubmit: () => console.log("aa")
                },
                {
                    subType: "razón social",
                    subforms: socialMotiveSubform,
                    schema: socialMotiveSchema,
                    onSubmit: () => console.log("aa")
                }
            ]}
            buttonData={{text: "Agregar cliente"}}
            onCancel={() => console.log("aa")}
        />
    )
}

export default AddClient;