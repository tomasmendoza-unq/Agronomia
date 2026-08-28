export type Traveler = {
    id: number;
    name: string;
    surname: string;
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
    listPrices: number[];
};
