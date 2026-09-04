import type { InferData, Schema } from "../validation-form/shema";
import type { SubForm } from "./sub-form";

export interface OptionForm<T extends Schema> {
    subType: string
    subforms: SubForm[]
    schema: T
    onSubmit: (data: InferData<T>) => void;
}