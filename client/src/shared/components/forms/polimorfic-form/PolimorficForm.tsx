import { useRef, useState } from "react";
import ButtonsContainer from "../components/buttons-container/ButtonsContainer";
import type { ButtonData } from "../simple-form/types/button/credentials-button";
import type { OptionForm } from "../types/step";
import type { Schema } from "../validation-form/shema";
import OptionList from "./components/options-list";
import ValidationForm, { type ValidationFormHandleProps } from "../validation-form/ValidationForm";
import { container } from "./styles";

interface PolimorficFormProps<T extends Schema> {
    options: OptionForm<T>[]
    buttonData: ButtonData
    onCancel: (isCancel: boolean) => void
}

function PolimorficForm<T extends Schema>({options, buttonData, onCancel}: PolimorficFormProps<T>) {
    const form = useRef<ValidationFormHandleProps>(null);
    const [subType, setIsSubtype] = useState<string | undefined>();

    const handleCancel = () => form.current?.confirmCancel();
    const handleOption = (subType: string) => setIsSubtype(subType);
    const subTypes = options.map(option => option.subType);

    return (
        <section className={container}>
            <OptionList onOption={handleOption} options={subTypes} />
            {subType && <SubFormFactory subType={subType} options={options} onCancel={onCancel} ref={form} />}
            <ButtonsContainer buttonData={buttonData} cancelOption={{onSubmit: handleCancel}} />
        </section>
    )
}

interface SubFormFactoryProps<T extends Schema> {
    subType: string
    options: OptionForm<T>[]
    onCancel: (isCancel: boolean) => void
    ref: React.Ref<ValidationFormHandleProps>;
}

function SubFormFactory<T extends Schema>({subType, options, ref, onCancel}: SubFormFactoryProps<T>) {
    const option = options.find(option => option.subType === subType)!;

    return (
        <ValidationForm 
            schema={option.schema}
            subForms={option.subforms}
            onSubmit={option.onSubmit}
            onCancel={onCancel}
            ref={ref}
        />
    )
}

export default PolimorficForm;