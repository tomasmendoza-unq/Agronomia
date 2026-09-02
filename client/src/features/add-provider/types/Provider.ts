export type Traveler = {
    id: number;
    fullName: string;
    phoneNumber: string;
};

export type Provider = {
    id: number;
    tradeName: string;
    legalName: string;
    cuit: string;
    phoneNumber: string;
    traveler: Traveler;
    companyId: number;
    payments: string[];
    listPrices: number[];
};
