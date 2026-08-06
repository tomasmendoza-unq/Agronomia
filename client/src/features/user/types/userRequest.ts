export type UserRequest = {
    name: string;
    role: "Dueño" | "Facturacion" | "Vendedor" | "Administrador";
    email: string;
    id_company: number;
};
