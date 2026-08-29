import type { InferData, Schema } from "./shema";
import type { SubForm } from "../types/sub-form";

export interface InsertFormProps<T extends Schema> {
    subForms: SubForm[]
    schema: T;
    onSubmit: (data: InferData<T>) => void;
}
