import type { InputData } from "@/shared/components/credentials-form/types/input/credentials-input";

const createUserInputs: InputData[] = [
    {
        type: "select",
        name: "role",
        title: "Rol",
        placeholder: "Selecciona rol",
        id: 0,
        options: [
            { id: 1, value: "Administrador" },
            { id: 3, value: "Vendedor" },
            { id: 4, value: "Facturacion" },
        ],
    },
    {
        type: "text",
        name: "name",
        title: "Nombre",
        placeholder: "",
        id: 1,
    },
    {
        type: "email",
        name: "email",
        title: "Correo",
        placeholder: "",
        id: 2,
    },
];

export default createUserInputs;
