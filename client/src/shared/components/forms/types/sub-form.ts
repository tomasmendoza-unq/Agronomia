import type { InputRow } from "@/shared/types/input/input"

export interface SubForm {
    inputs: InputRow[]
    title?: string
    id: number
}