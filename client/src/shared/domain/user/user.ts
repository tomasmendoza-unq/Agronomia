import type { Role } from "./role";

export interface User {
    id: number;
    email: string;
    name: string;
    surname: string;
    role: Role;
    companyLogo: string;
}
