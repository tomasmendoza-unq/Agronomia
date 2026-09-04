import type { InferData, Schema } from "../validation-form/shema";
import type { SubFormData } from "./sub-form";

export interface OptionForm<T extends Schema> {
    subType: string
    subforms: SubFormData[]
    schema: T
    onSubmit: (data: InferData<T>) => void;
}