import type { Client } from "./client"

export interface NaturalPerson extends Client {
    name: string 
    surname: string
    phone: string 
    email?: string
}