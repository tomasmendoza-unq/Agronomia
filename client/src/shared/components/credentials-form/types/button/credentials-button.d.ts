export type ButtonData<T> = {
    text: string
    onSubmit: (data: T) => void 
}