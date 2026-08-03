import type { AnyObjectSchema } from "yup"
import type { ButtonData } from "./types/button/credentials-button"
import type { InputData } from "./types/input/credentials-input"
import type { LinkData } from "./types/link/Link"

export interface CredentialsFormProps<T extends object> {
    title: string
    inputs: InputData[]
    button: ButtonData
    links: LinkData[]
    schema: AnyObjectSchema
    onSubmit: (data: T) => void
}