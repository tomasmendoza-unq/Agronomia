import type { SubForm } from "@/shared/components/forms/types/sub-form";

export const subForms: SubForm[] = [
    {
        title: "Datos del cliente",
        inputs: [
            [
                {
                    type: "text",
                    name: "name",
                    title: "Nombre",
                    placeholder: "Ingrese el nombre",
                    id: 0,
                },
                {
                    type: "text",
                    name: "surname",
                    title: "Apellido",
                    placeholder: "Ingrese el apellido",
                    id: 1,
                },
            ],
            [
                {
                    type: "text",
                    name: "cuit",
                    title: "CUIT/CUIL",
                    placeholder: "Ingrese el CUIT/CUIL",
                    id: 2,
                },
                {
                    type: "text",
                    name: "phone",
                    title: "Teléfono",
                    placeholder: "Ingrese el teléfono",
                    id: 3,
                },
            ],
            [
                {
                    type: "email",
                    name: "email",
                    title: "Email",
                    placeholder: "Ingrese el correo",
                    id: 4,
                },
                {
                    type: "text",
                    name: "address",
                    title: "Dirección",
                    placeholder: "Ingrese la dirección",
                    id: 5,
                },
            ],
            [
                {
                    type: "text",
                    name: "location",
                    title: "Localidad",
                    placeholder: "Ingrese la localidad",
                    id: 6,
                },
                {
                    type: "select",
                    name: "address",
                    title: "Dirección",
                    placeholder: "Ingrese la dirección",
                    id: 7,
                    options: []
                },
            ],
        ],
        id: 0
    }
]