export const ADMIN_ROUTES = {
    BASE: "/admin",
    CONFIGURATION: `configuration`,
    PROVEEDORES: `proveedores`,
    CLIENTES: `clientes`,
    PRODUCTOS: `productos`,
    VENTAS: `ventas`,
    ADD_PROVIDER: `nuevo-proveedor`,
    EDIT_PROVIDER: `editar-proveedor/:providerId`,
    EDIT_PROVIDER_PATH: (providerId: number) =>
        `editar-proveedor/${providerId}`,
    ADD_CLIENT: `nuevo-cliente`,
    EDIT_CLIENT: `editar-cliente/:clientId`,
    EDIT_CLIENT_PATH: (clientId: number) => `editar-cliente/${clientId}`,
};
