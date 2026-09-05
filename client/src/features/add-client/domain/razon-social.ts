import type { Client } from "./client"
import type { CompleteName } from "./complete-name"

export interface RazonSocial extends Client {
    razonSocial: string
    associateCompleteName: CompleteName
    associatePhone: string
}