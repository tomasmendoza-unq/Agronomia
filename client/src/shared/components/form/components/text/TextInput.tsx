import type { TextInputData } from "../../../credentials-form/types/input/credentials-input";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";
import { styles } from "./styles";
import type {
    DeepRequired,
    FieldError,
    FieldErrorsImpl,
    Merge,
    Path,
    UseFormRegister,
} from "react-hook-form";
import type { output } from "zod";
import type { InferData, Schema } from "../../types/shema";
import ErrorMessage from "../error/ErrorMessage";

interface TextInputProps<T extends Schema> {
    input: TextInputData;
    inputStyles: SystemStyleObject;
    register: UseFormRegister<InferData<T>>;
    error:
        | FieldError
        | undefined
        | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>;
}

function TextInput<T extends Schema>({
    input,
    inputStyles,
    register,
    error,
}: TextInputProps<T>) {
    return (
        <div className={css(styles.container)}>
            <label
                htmlFor={input.name}
                className={css(styles.label)}
            >
                <span>{input.title}</span>
            </label>
            <input
                {...register(input.name as Path<output<T>>)}
                className={css(inputStyles)}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                id={input.name}
            />
            {error && <ErrorMessage message={error.message as string} />}
        </div>
    );
}

export default TextInput;
