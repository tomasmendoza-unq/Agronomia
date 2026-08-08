import type { Role } from "./Roles";

export type RegisterRequest = {
    name: string;
    surname: string;
    rol: Role;
    email: string;
    id_company: number;
};
