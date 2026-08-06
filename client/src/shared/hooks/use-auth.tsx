import type { CompanyData } from "@/features/company/types/CompanyData.t";
import { useState } from "react";

export const UseAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    const companyData: CompanyData = {
        id: 1,
        name: "AgroTech",
        legalName: "AgroTech S.A.",
        cuit: "30-12345678-9",
        logo: "https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg",
    };

    const user = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        company: companyData,
    };

    return { isAuthenticated, setIsAuthenticated, user };
};
