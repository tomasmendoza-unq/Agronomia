import type { ButtonData } from "../../types/button/credentials-button";
import type { InputData } from "../../types/input/credentials-input";
import type { InferData, Schema } from "../../types/shema";

export interface InsertFormProps<T extends Schema> {
    inputsData: InputData[]
    buttonData: ButtonData
    schema: T
    onSubmit: (data: InferData<T>) => void
}