import type { CompanyData } from "@/features/company/types/CompanyData.t";

export interface User {
    id: number;
    email: string;
    rol: string;
    company: CompanyData;
}
