import adapterCuit from "@/features/add-client/adapter/cuit";
import * as z from "zod";

const providerSchema = z.object({
    legalName: z
        .string()
        .nonempty({ message: "La razón social es obligatoria" }),
    cuit: z
        .string()
        .nonempty({ message: "El CUIT es obligatorio" })
        .length(13, { message: "El CUIT debe tener 11 números" })
        .transform((value) => adapterCuit(value)),
    tradeName: z
        .string()
        .nonempty({ message: "El nombre comercial es obligatorio" }),
    phoneNumber: z
        .string()
        .nonempty({ message: "El teléfono de fábrica es obligatorio" }),
    travelerName: z.string().optional(),
    travelerPhoneNumber: z.string().optional(),
});

export type ProviderSchema = typeof providerSchema;

export default providerSchema;
