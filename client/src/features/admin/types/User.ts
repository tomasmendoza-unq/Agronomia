import type { Role } from "../api/dto/Roles";

export type User = {
    id: number;
    name: string;
    email: string;
    role: Role;
    branchDirection: string;
};
