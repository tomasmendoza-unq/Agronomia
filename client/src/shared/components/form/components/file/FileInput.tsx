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
import type { InferData, Schema } from "../../../credentials-form/types/shema";
import ErrorMessage from "../error/ErrorMessage";

interface FileInputProps<T extends Schema> {
    input: TextInputData;
    inputStyles: SystemStyleObject;
    register: UseFormRegister<InferData<T>>;
    error:
        | FieldError
        | undefined
        | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>;
}

function FileInput<T extends Schema>({
    input,
    inputStyles,
    register,
    error,
}: FileInputProps<T>) {
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
                type="file"
                id={input.name}
            />
            {error && <ErrorMessage message={error.message as string} />}
        </div>
    );
}

export default FileInput;
