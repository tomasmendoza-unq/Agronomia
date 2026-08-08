import type { InputData } from "@/shared/components/credentials-form/types/input/credentials-input";

const createUserInputs: InputData[] = [
    {
        type: "text",
        name: "name",
        title: "Nombre",
        placeholder: "",
        id: 1,
    },
    {
        type: "select",
        name: "rol",
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
        type: "email",
        name: "email",
        title: "Correo",
        placeholder: "",
        id: 2,
    },
];

export default createUserInputs;
