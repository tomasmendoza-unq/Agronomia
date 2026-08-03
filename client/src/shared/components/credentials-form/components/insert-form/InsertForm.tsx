import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";
import { useForm } from "react-hook-form";

function InsertForm<T extends object>({inputsData, buttonData, schema, onSubmit}: InsertFormProps<T>) {

    const {register, handleSubmit, formState: { errors }} = useForm<T>({
        resolver: yupResolver(schema)
    });

    const handleForm = (data: T) => onSubmit(data);
    
    const { form, input, button } = styles;

    return (
        <form onSubmit={handleSubmit(handleForm)} className = {css(form)}>
            {inputsData.map(i => Input(i, input))}
            <button 
                className = {css(button)}>
                    {buttonData.text}
            </button>
        </form>
    )
}

export default InsertForm;
