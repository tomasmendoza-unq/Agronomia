import type { InputData } from "@/shared/components/credentials-form/types/input/credentials-input";

const createUserInputs: InputData[] = [
    {
        type: "text",
        name: "name",
        title: "Nombre",
        placeholder: "",
        id: 0,
    },
    {
        type: "text",
        name: "surname",
        title: "Apellido",
        placeholder: "",
        id: 1,
    },
    {
        type: "select",
        name: "rol",
        title: "Rol",
        placeholder: "Selecciona rol",
        id: 2,
        options: [
            { id: 1, value: "FACTURACION", label: "Facturación" },
            { id: 2, value: "VENDEDOR", label: "Vendedor" },
            { id: 3, value: "ADMINISTRADOR", label: "Administrador" },
        ],
    },
    {
        type: "email",
        name: "email",
        title: "Correo",
        placeholder: "",
        id: 3,
    },
];

export default createUserInputs;
