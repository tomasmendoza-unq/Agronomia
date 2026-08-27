import FormContainer from "@/shared/components/form-container/FormContainer"
import InsertForm from "@/shared/components/form/InsertForm";
import type { InputRow } from "@/shared/types/input/input";
import z from "zod";

const roles = ["FACTURACION", "VENDEDOR", "ADMINISTRADOR"] as const;

const schema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    surname: z.string().min(1, "El apellido es requerido"),
    email: z
        .email("El correo electrónico no es válido")
        .min(1, "El correo es requerido"),
    rol: z.enum(roles, { message: "Selecciona un rol válido" }),
});

const Test = () => {
    return (
        <FormContainer 
            subForms={[
                <SubForm1 />,
                <SubForm2 />
            ]}
            buttonTitle="test"
        />
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const SubForm1 = () => {
    return (
        <InsertForm 
            inputsData = {createUserInputs()}
            isLoading = {false}
            onSubmit = {() => ""}
            schema={schema}
        />
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const SubForm2 = () => {
    return (
        <InsertForm 
            inputsData = {createUserInputs()}
            isLoading = {false}
            onSubmit = {() => ""}
            schema={schema}
        />
    )
}

const createUserInputs = (): InputRow[] => [
    [
        { type: "text", name: "name", title: "Nombre", placeholder: "", id: 0 },
        {
            type: "text",
            name: "surname",
            title: "Apellido",
            placeholder: "",
            id: 1,
        },
    ],
    [
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
    ],
    [
        {
            type: "email",
            name: "email",
            title: "Correo",
            placeholder: "",
            id: 4,
        },
    ],
];

export default Test;