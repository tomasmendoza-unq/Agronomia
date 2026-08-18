import type { InputRow } from "@/shared/components/form/insert-form";

const loginInputs: InputRow[] = [
    [
        {
            type: "text",
            name: "email",
            title: "Email",
            placeholder: "Ingrese su correo",
            id: 0,
        },
    ],
    [
        {
            type: "password",
            name: "password",
            title: "Contraseña",
            placeholder: "Ingrese su contraseña",
            id: 1,
        },
    ],
];

export default loginInputs;
