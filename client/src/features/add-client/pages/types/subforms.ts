import type { SubFormData } from "@/shared/components/forms/types/sub-form";
import { formatCuit } from "@/shared/domain/cuit-cuil/format";

export const naturalPersonsubForms: SubFormData[] = [
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
                    type: "dynamic",
                    name: "cuit",
                    title: "CUIT/CUIL",
                    placeholder: "Ingrese el CUIT/CUIL",
                    format: formatCuit,
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
                    name: "province",
                    title: "Provincia",
                    id: 7,
                    options: [
                        {
                            value: "Cordoba",
                            label: "Córdoba",
                            id: 0
                        }
                    ]
                },
            ],
        ],
        id: 0
    }
];

export const socialMotiveSubform: SubFormData[] = [
        {
            title: "Datos cliente",
            inputs: [
            [
                {
                    type: "text",
                    name: "razonSocial",
                    title: "Nombre/Razón Social",
                    placeholder: "Ingrese la razón social",
                    id: 0,
                },
                {
                    type: "dynamic",
                    name: "cuit",
                    title: "CUIT/CUIL",
                    placeholder: "Ingrese el CUIT/CUIL",
                    format: formatCuit,
                    id: 2,
                },
            ],
            [
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
                    name: "province",
                    title: "Provincia",
                    id: 7,
                    options: [
                        {
                            value: "Cordoba",
                            label: "Córdoba",
                            id: 0
                        }
                    ]
                },
            ],
        ],
        id: 0,
        },
        {
        title: "Razón social",
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
                    name: "phone",
                    title: "Teléfono",
                    placeholder: "Ingrese el teléfono",
                    id: 3,
                },
                {
                    type: "email",
                    name: "email",
                    title: "Email",
                    placeholder: "Ingrese el correo",
                    id: 4,
                },
            ],
        ],
        id: 1
    }
]