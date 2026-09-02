// subforms.ts
import type { SubForm } from "@/shared/components/forms/types/sub-form";
import { formatCuit } from "@/shared/domain/cuit-cuil/format";

export const providerSubForms: SubForm[] = [
    {
        title: "Datos",
        inputs: [
            [
                {
                    type: "text",
                    name: "legalName",
                    title: "Razón social *",
                    placeholder: "Ingrese la razón social",
                    id: 0,
                },
                {
                    type: "dynamic",
                    name: "cuit",
                    title: "CUIT/CUIL",
                    placeholder: "Ingrese el CUIT/CUIL",
                    format: formatCuit,
                    id: 1,
                },
            ],
            [
                {
                    type: "text",
                    name: "tradeName",
                    title: "Nombre comercial *",
                    placeholder: "Ingrese el nombre comercial",
                    id: 2,
                },
            ],
        ],
        id: 0,
    },
    {
        title: "Contacto",
        inputs: [
            [
                {
                    type: "text",
                    name: "phoneNumber",
                    title: "Teléfono fábrica *",
                    placeholder: "Ingrese el teléfono",
                    id: 3,
                },
            ],
            [
                {
                    type: "text",
                    name: "travelerName",
                    title: "Nombre viajante",
                    placeholder: "Ingrese el nombre del viajante",
                    id: 4,
                },
                {
                    type: "text",
                    name: "travelerPhoneNumber",
                    title: "Teléfono viajante",
                    placeholder: "Ingrese el teléfono del viajante",
                    id: 5,
                },
            ],
        ],
        id: 1,
    },
];
