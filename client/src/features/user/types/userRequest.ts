export type UserRequest = {
    name: string;
    rol: "Dueño" | "Facturacion" | "Vendedor" | "Administrador";
    email: string;
    id_company: number;
};
