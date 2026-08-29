export type InputType = "text" | "select" | "email" | "password" | "file" | "dynamic";

export type TextInputType = Exclude<InputType, "select">;
export type SelectInputType = Extract<InputType, "select">;

export type TextInputData = {
    type: TextInputType;
    name: string;
    title: string;
    placeholder: string;
    id: number;
};

export type SelectInputData = {
    type: SelectInputType;
    name: string;
    title: string;
    placeholder?: string;
    id: number;
    options: Option[];
};

export type FileInputData = {
    type: "file";
    name: string;
    title: string;
    placeholder: string;
    id: number;
};

export type DynamicInputData = {
    type: "dynamic";
    name: string;
    title: string;
    placeholder: string;
    id: number;
    format: (data: string) => string
};

export type InputData = TextInputData | SelectInputData | FileInputData | DynamicInputData;

export type Option = {
    value: string;
    label: string;
    id: number;
};

export type InputRow = InputData[];
