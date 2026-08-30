import { subForms } from "./types/subforms";
import naturalPersonSchema from "./types/natural-person-schema";
import PolimorficForm from "@/shared/components/forms/polimorfic-form/PolimorficForm";

const AddClient = () => {
    
    return (
        <PolimorficForm 
            options={[
                {
                    subType: "persona natural",
                    subforms: subForms,
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