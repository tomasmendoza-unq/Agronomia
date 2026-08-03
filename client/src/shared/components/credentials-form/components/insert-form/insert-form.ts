import type { AnyObjectSchema } from "yup";
import type { ButtonData } from "../../types/button/credentials-button";
import type { InputData } from "../../types/input/credentials-input";

export interface InsertFormProps<T extends object> {
    inputsData: InputData[]
    buttonData: ButtonData
    schema: AnyObjectSchema
    onSubmit: (data: T) => void
}