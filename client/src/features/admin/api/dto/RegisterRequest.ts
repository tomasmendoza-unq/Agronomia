import type { Role } from "./Roles";

export type RegisterRequest = {
    name: string;
    rol: Role;
    email: string;
    id_company: number;
};
