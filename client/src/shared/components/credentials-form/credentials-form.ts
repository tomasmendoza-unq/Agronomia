import type { ButtonData } from "../../types/button/credentials-button"
import type { InputData } from "../../types/input/credentials-input"
import type { LinkData } from "@/shared/types/link/Link"

export interface CredentialsFormProps {
    title: string
    inputs: InputData[]
    button: ButtonData
    links: LinkData[]
}