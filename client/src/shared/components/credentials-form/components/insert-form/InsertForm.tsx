import type { InsertFormProps } from "./insert-form";
import Input from "./types/select-input";
import { styles } from "./styles";
import { css } from "@styled-system/css";

function InsertForm({ inputsData, buttonData }: InsertFormProps) {
    const { form, input, button } = styles;

    return (
        <form
            className={css(form)}
            onSubmit={(e) => {
                e.preventDefault();
                buttonData.onSubmit();
            }}
        >
            {inputsData.map((i) => Input(i, input))}
            <button
                type="submit"
                className={css(button)}
            >
                {buttonData.text}
            </button>
        </form>
    );
}

export default InsertForm;
