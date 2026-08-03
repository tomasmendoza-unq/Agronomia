import type { SelectInputData } from "../../../types/input/credentials-input";
import { css } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";
import type { InferData, Schema } from "../../../types/shema";
import type { DeepRequired, FieldError, FieldErrorsImpl, Merge, Path, UseFormRegister } from "react-hook-form";
import type { output } from "zod";
import ErrorMessage from "../components/error-message/ErrorMessage";

interface SelectInputProps<T extends Schema> {
    input: SelectInputData
    styles: SystemStyleObject
    register: UseFormRegister<InferData<T>>, 
    error: FieldError | undefined | Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>
}

function SelectInput<T extends Schema>({input, styles, register, error}: SelectInputProps<T>) {
    return (
        <div>
            <label htmlFor = {input.name}></label>
            <span>{input.title}</span>
            <input 
                {...register(input.name as Path<output<T>>)}
                className = {css(styles)}
                type = {input.type} 
                name = {input.name} 
                id = {input.name} 
            />
            {error && <ErrorMessage message = {error.message as string} />}
        </div>
    )
} 

export default SelectInput;