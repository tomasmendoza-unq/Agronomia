import type { Role } from "./role";

export interface User {
    id: number;
    email: string;
    role: Role;
    companyLogo: string;
}
