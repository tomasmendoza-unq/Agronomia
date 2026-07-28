import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";

function InsertForm({inputs, button}: InsertFormProps) {
    return (
        <form action="">
            {inputs.map(input => Input(input))}
            <button onClick = {button.onSubmit}>{button.text}</button>
        </form>
    )
}

export default InsertForm;