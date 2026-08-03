import type { InputData } from "@/shared/components/credentials-form/types/input/credentials-input";

const createUserInputs: InputData[] = [
    {
        type: "select",
        name: "rol",
        title: "Rol",
        placeholder: "Selecciona rol",
        id: 0,
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
