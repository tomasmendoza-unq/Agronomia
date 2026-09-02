import type { Ubication } from "../types/ubication";
import type { Client } from "./client";

export interface RazonSocial extends Client {
    razonSocial: string;
    associateName: string;
    associateSurname: string;
    associatePhone: string;
    email?: string;
    ubication: Ubication;
}