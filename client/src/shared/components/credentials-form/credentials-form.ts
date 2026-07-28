import type { ButtonData } from "@/shared/types/button/button"
import type { InputData } from "@/shared/types/input/input"
import type { LinkData } from "@/shared/types/link/Link"

export interface CredentialsFormProps {
    title: string
    inputs: InputData[]
    button: ButtonData
    links: LinkData[]
}