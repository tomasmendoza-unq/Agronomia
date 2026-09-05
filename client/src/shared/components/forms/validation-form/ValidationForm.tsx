import { useForm } from "react-hook-form";
import type { InsertFormProps } from "./validation-form";
import type { InferData, Schema } from "./shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import { useImperativeHandle } from "react";
import type { SubFormData } from "../types/sub-form";
import SubForm from "./components/subforms/SubForm";

export interface ValidationFormHandleProps {
    confirmCancel: () => void
}

type ValidationFormProps<T extends Schema> = InsertFormProps<T> & {
  ref?: React.Ref<ValidationFormHandleProps>;
};

function buildDefaultValues(subForms: SubFormData[]) {
    const defaults: Record<string, unknown> = {};
    subForms.forEach(subForm => {
        subForm.inputs.flat().forEach(input => {
            defaults[input.name] = input.defaultValue ?? "";
        });
    });
    return defaults;
}


function ValidationForm<T extends Schema>({subForms, schema, onSubmit, onCancel, ref}: ValidationFormProps<T>) {
    const {
        register,
        handleSubmit,
        formState: { isDirty, errors },
    } = useForm<InferData<T>>({
        resolver: zodResolver(schema),
        defaultValues: buildDefaultValues(subForms) as InferData<T>
    });

    useImperativeHandle(ref, () => ({
        confirmCancel: () => onCancel(isDirty)
    }), [isDirty, onCancel])

    const handleForm = (data: InferData<T>) => onSubmit(data);

    const { form, input, row } = styles;

    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className={css(form)}
            id={"validation-form"}
        >
        {subForms.map(subForm => 
            <SubForm 
                key={subForm.id}
                title={subForm.title} 
                inputs={subForm.inputs} 
                register={register}
                rowStyles={row}
                inputStyles={input}
                errors={errors}
            />)}
        </form>
        );
    }
    
export default ValidationForm;
