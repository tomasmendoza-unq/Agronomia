import type { CompanyData } from "@/features/company/types/CompanyData.t";
import type { Role } from "./role";

export interface User {
    id: number;
    email: string;
    role: Role;
    company: CompanyData;
}
