import type { Client } from "./Client";

export interface NaturalPerson extends Client {
    name: string 
    surname: string
    phone: string 
    email: string
}