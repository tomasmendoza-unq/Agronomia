import type { ButtonData } from "../credentials-form/types/button/credentials-button";
import type { InputData } from "../credentials-form/types/input/credentials-input";
import type { InferData, Schema } from "../credentials-form/types/shema";

export type InputRow = InputData[];

export interface InsertFormProps<T extends Schema> {
    inputsData: InputRow[];
    isLoading: boolean;
    buttonData: ButtonData;
    schema: T;
    onSubmit: (data: InferData<T>) => void;
    children?: React.ReactNode;
}
