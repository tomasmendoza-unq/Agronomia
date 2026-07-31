import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";

function InsertForm({inputsData, buttonData}: InsertFormProps) {
    
    const { form, input, button } = styles;

    return (
        <form className = {css(form)}>
            {inputsData.map(i => Input(i, input))}
            <button 
                onClick = {buttonData.onSubmit} 
                className = {css(button)}>
                    {buttonData.text}
            </button>
        </form>
    )
}

export default InsertForm;