import { useState } from "react";
import ButtonsContainer from "../components/buttons-container/ButtonsContainer";
import type { ButtonData } from "../simple-form/types/button/credentials-button";
import type { OptionForm } from "../types/step";
import type { Schema } from "../validation-form/shema";
import OptionList from "./components/options-list";
import ValidationForm from "../validation-form/ValidationForm";
import { container } from "./styles";

interface PolimorficFormProps<T extends Schema> {
    options: OptionForm<T>[]
    buttonData: ButtonData
    onCancel: () => void
}

function PolimorficForm<T extends Schema>({options, buttonData, onCancel}: PolimorficFormProps<T>) {

    const [subType, setIsSubtype] = useState<string | undefined>();

    const handleOption = (subType: string) => setIsSubtype(subType);
    const subTypes = options.map(option => option.subType);

    return (
        <section className={container}>
            <OptionList onOption={handleOption} options={subTypes} />
            {subType && <SubFormFactory subType={subType} options={options} />}
            <ButtonsContainer buttonData={buttonData} cancelOption={{onSubmit: onCancel}} />
        </section>
    )
}

interface SubFormFactoryProps<T extends Schema> {
    subType: string
    options: OptionForm<T>[]
}

function SubFormFactory<T extends Schema>({subType, options}: SubFormFactoryProps<T>) {
    const option = options.find(option => option.subType === subType)!;

    return (
        <ValidationForm 
            schema={option.schema}
            subForms={option.subforms}
            onSubmit={option.onSubmit}
        />
    )
}

export default PolimorficForm;