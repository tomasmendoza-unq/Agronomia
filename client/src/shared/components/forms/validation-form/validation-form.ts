import type { InputRow } from "@/shared/types/input/input";
import type { InferData, Schema } from "./shema";

export interface InsertFormProps<T extends Schema> {
    inputsData: InputRow[];
    isLoading: boolean;
    schema: T;
    onSubmit: (data: InferData<T>) => void;
    children?: React.ReactNode;
}
