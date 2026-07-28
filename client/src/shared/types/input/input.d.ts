export type InputData = {
    type: InputType
    name: string 
    title: string
    placeholder: string
    id: number
};

export type InputType = 'text' | 'select' | 'email' | 'password'