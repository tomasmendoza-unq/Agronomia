import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";
import type {
    DeepRequired,
    FieldError,
    FieldErrorsImpl,
    Merge,
    Path,
    UseFormRegister,
} from "react-hook-form";
import type { output } from "zod";

import ErrorMessage from "../error/ErrorMessage";
import type { DynamicInputData } from "@/shared/types/input/input";
import { fieldStyles } from "../styles";
import type { InferData, Schema } from "../../shema";
import { useState } from "react";

interface DynamicInputProps<T extends Schema> {
    input: DynamicInputData;
    inputStyles: SystemStyleObject;
    register: UseFormRegister<InferData<T>>;
    error:
        | FieldError
        | undefined
        | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>;
}

function DynamicInput<T extends Schema>({
    input,
    inputStyles,
    register,
    error,
}: DynamicInputProps<T>) {
    const [value, setValue] = useState(input.defaultValue ?? "");

    const handleValue = (value: string) => {
        setValue(input.format(value));
    };

    return (
        <div className={css(fieldStyles.container)}>
            <label
                htmlFor={input.name}
                className={css(fieldStyles.label)}
            >
                <span>{input.title}</span>
                {input.required && (
                    <span
                        className={css(fieldStyles.required)}
                        aria-hidden="true"
                    >
                        *
                    </span>
                )}
            </label>
            <input
                {...register(input.name as Path<output<T>>)}
                className={css(inputStyles)}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                id={input.name}
                value={value}
                onChange={(event) => handleValue(event.target.value)}
            />
            {error && <ErrorMessage message={error.message as string} />}
        </div>
    );
}

export default DynamicInput;
