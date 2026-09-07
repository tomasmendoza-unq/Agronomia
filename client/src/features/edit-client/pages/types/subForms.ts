import type { SubFormData } from "@/shared/components/forms/types/sub-form";
import { formatCuit } from "@/shared/domain/cuit-cuil/format";
import { provinces } from "@/shared/domain/locate/locate";

export const naturalPersonsubForms: SubFormData[] = [
    {
        title: "Datos del cliente",
        inputs: [
            [
                {
                    type: "text",
                    name: "name",
                    disabled: true,
                    title: "Nombre",
                    placeholder: "Ingrese el nombre",
                    id: 0,
                },
                {
                    type: "text",
                    name: "surname",
                    disabled: true,
                    title: "Apellido",
                    placeholder: "Ingrese el apellido",
                    id: 1,
                },
            ],
            [
                {
                    type: "dynamic",
                    name: "cuit",
                    disabled: true,
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
                    options: provinces.map((province) => {
                        return {
                            value: province,
                            label: province,
                            id: province,
                        };
                    }),
                },
            ],
        ],
        id: 0,
    },
];

import type { ClientToEdit } from "../../types/Client";
export const socialMotiveSubform: SubFormData[] = [
    {
        title: "Datos cliente",
        inputs: [
            [
                {
                    type: "text",
                    name: "razonSocial",
                    disabled: true,
                    title: "Nombre/Razón Social",
                    placeholder: "Ingrese la razón social",
                    id: 0,
                },
                {
                    type: "dynamic",
                    name: "cuit",
                    disabled: true,
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
                    options: provinces.map((province) => {
                        return {
                            value: province,
                            label: province,
                            id: province,
                        };
                    }),
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
        id: 1,
    },
];

function withInitialValues(
    subForms: SubFormData[],
    values: Record<string, string>,
): SubFormData[] {
    return subForms.map((subForm) => ({
        ...subForm,
        inputs: subForm.inputs.map((row) =>
            row.map((input) => ({
                ...input,
                defaultValue: values[input.name] ?? "",
            })),
        ),
    }));
}

export function generateNaturalPersonSubForms(
    client: ClientToEdit,
): SubFormData[] {
    return withInitialValues(naturalPersonsubForms, {
        name: client.name,
        surname: client.surname,
        cuit: client.cuit,
        phone: client.phone,
        email: client.email ?? "",
        address: client.address ?? "",
        location: client.location,
        province: client.province,
    });
}

export function generateSocialMotiveSubForms(
    client: ClientToEdit,
): SubFormData[] {
    if (!("razonSocial" in client)) return socialMotiveSubform;

    return withInitialValues(socialMotiveSubform, {
        razonSocial: client.razonSocial,
        cuit: client.cuit,
        address: client.address ?? "",
        location: client.location,
        province: client.province,
        name: client.name,
        surname: client.surname,
        phone: client.phone,
        email: client.email ?? "",
    });
}
