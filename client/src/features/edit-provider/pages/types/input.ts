import type { SubFormData } from "@/shared/components/forms/types/sub-form";
import { formatCuit } from "@/shared/domain/cuit-cuil/format";
import type { Provider } from "../../types/Provider";

export const generateSubForm = (data: Provider): SubFormData[] => {
    return [
        {
            title: "Datos",
            inputs: [
                [
                    {
                        type: "text",
                        name: "legalName",
                        title: "Razón social",
                        placeholder: data.legalName,
                        defaultValue: data.legalName,
                        id: 0,
                        disabled: true,
                    },
                    {
                        type: "dynamic",
                        name: "cuit",
                        title: "CUIT/CUIL",
                        placeholder: data.cuit,
                        defaultValue: data.cuit,
                        format: formatCuit,
                        id: 1,

                        disabled: true,
                    },
                ],
                [
                    {
                        type: "text",
                        name: "tradeName",
                        title: "Nombre comercial",
                        placeholder: data.tradeName,
                        defaultValue: data.tradeName,
                        id: 2,
                        disabled: true,
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
                        title: "Teléfono fábrica",
                        placeholder: data.phoneNumber,
                        defaultValue: data.phoneNumber,
                        id: 3,
                        required: true,
                    },
                ],
                [
                    {
                        type: "text",
                        name: "travelerName",
                        title: "Nombre viajante",
                        placeholder: "Ingrese el nombre del viajante",
                        defaultValue:
                            data.traveler?.fullName === "No indicado"
                                ? ""
                                : (data.traveler?.fullName ?? ""),
                        id: 4,
                    },
                    {
                        type: "text",
                        name: "travelerPhoneNumber",
                        title: "Teléfono viajante",
                        placeholder: "Ingrese el teléfono del viajante",
                        defaultValue:
                            data.traveler?.phoneNumber === "No indicado"
                                ? ""
                                : (data.traveler?.phoneNumber ?? ""),
                        id: 5,
                    },
                ],
            ],
            id: 1,
        },
    ];
};
