export type InputData = TextInputData | SelectInputData

export type TextInputData = {
    type: InputType
    name: string 
    title: string
    placeholder: string
    id: number
};

export type SelectInputData = TextInputData & { options: Option[] };

type Option = {
    value: string
    id: number
}

export type InputType = 'text' | 'select' | 'email' | 'password'