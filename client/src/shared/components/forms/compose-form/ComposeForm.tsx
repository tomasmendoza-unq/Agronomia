import ButtonsContainer from "../components/buttons-container/ButtonsContainer";
import type { ButtonData } from "../simple-form/types/button/credentials-button";
import type { SubForm } from "../types/sub-form";
import type { InferData, Schema } from "../validation-form/shema";
import ValidationForm from "../validation-form/ValidationForm";
import { container } from "./styles";

interface FormContainerProps<T> {
    subForms: SubForm[];
    schema: T
    buttonData: ButtonData
    onSubmit: (data: InferData<T>) => void;
    onCancel: () => void;
}

function ComposeForm<T extends Schema>({subForms, schema, buttonData, onSubmit, onCancel}: FormContainerProps<T>) {
    return (
        <section className={container}>
            <ValidationForm 
                subForms={subForms}
                schema={schema}
                onSubmit={onSubmit}
            />
            <ButtonsContainer buttonData={buttonData} cancelOption={{onSubmit: onCancel}} />
        </section>
    )
}

export default ComposeForm;