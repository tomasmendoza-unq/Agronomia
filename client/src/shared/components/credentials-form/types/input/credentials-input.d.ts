export type InputData = TextInputData | SelectInputData;

export type TextInputData = {
    type: InputType;
    name: string;
    title: string;
    placeholder: string;
    id: number;
};

export type SelectInputData = TextInputData & { options: Option[] };

export type Option = {
    value: string;
    label: string;
    id: number;
};

export type InputType = "text" | "select" | "email" | "password";
