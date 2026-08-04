import type { ButtonData } from "./types/button/credentials-button"
import type { InputData } from "./types/input/credentials-input"
import type { LinkData } from "./types/link/Link"
import type { InferData, Schema } from "./types/shema"

export interface CredentialsFormProps<T extends Schema> {
    title: string
    inputs: InputData[]
    button: ButtonData
    links: LinkData[]
    schema: T
    onSubmit: (data: InferData<T>) => void
}