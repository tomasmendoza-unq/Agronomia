export type User = {
    id: string;
    name: string;
    rol: "Dueño" | "Facturacion" | "Vendedor" | "Administrador";
    email: string;
};
