import type { Client } from "./client"
import type { CompleteName } from "./complete-name"

export interface NaturalPerson extends Client {
    completeName: CompleteName
    phone: string 
}