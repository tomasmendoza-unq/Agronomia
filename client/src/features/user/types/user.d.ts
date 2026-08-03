export type User = {
    id: string;
    name: string;
    surname: string;
    rol: "Dueño" | "Facturacion" | "Vendedor" | "Administrador";
    email: string;
};
