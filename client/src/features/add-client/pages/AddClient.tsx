import ComposeForm from "@/shared/components/forms/compose-form/ComposeForm";
import { subForms } from "./types/subforms";
import naturalPersonSchema from "./types/schema";

const AddClient = () => {
    
    return (
        <ComposeForm 
            subForms={subForms}
            schema={naturalPersonSchema}
            buttonData={{text: "Crear cliente"}}
            onSubmit={() => console.log("aa")}
            onCancel={() => console.log("aa")}
        />
    )
}

export default AddClient;