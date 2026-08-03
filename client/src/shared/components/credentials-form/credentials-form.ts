import type { Credentials } from "@/shared/auth/types/credentials"
import type { ButtonData } from "./types/button/credentials-button"
import type { InputData } from "./types/input/credentials-input"
import type { LinkData } from "./types/link/Link"

export interface CredentialsFormProps {
    title: string
    inputs: InputData[]
    button: ButtonData<Credentials>
    links: LinkData[]
}