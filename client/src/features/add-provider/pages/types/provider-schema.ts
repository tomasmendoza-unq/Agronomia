import * as z from "zod";

const providerSchema = z
    .object({
        legalName: z
            .string()
            .nonempty({ message: "La razón social es obligatoria" }),
        cuit: z
            .string()
            .nonempty({ message: "El CUIT/CUIL es obligatorio" })
            .length(13, { message: "El CUIT/CUIL debe tener 11 números" }),
        tradeName: z
            .string()
            .nonempty({ message: "El nombre comercial es obligatorio" }),
        phoneNumber: z
            .string()
            .nonempty({ message: "El teléfono de fábrica es obligatorio" }),
        travelerName: z.string().optional(),
        travelerPhoneNumber: z.string().optional(),
    })
    .refine(
        (data) => {
            const hasName = !!data.travelerName?.trim();
            const hasPhone = !!data.travelerPhoneNumber?.trim();

            if (!hasName && !hasPhone) return true;
            return hasName && hasPhone;
        },
        {
            message:
                "Si completa un dato del viajante, debe completar también el otro.",
            path: ["travelerPhoneNumber"],
        },
    );

export type ProviderSchema = typeof providerSchema;

export default providerSchema;
