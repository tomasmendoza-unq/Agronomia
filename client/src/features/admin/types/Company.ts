import type { Branch } from "./Branch";

export type Company = {
    id: number;
    name: string;
    legalName: string;
    cuit: string;
    logo: string;
    branches: Branch[];
};
