import * as z from "zod";

const socialMotiveSchema = z.object({
    razonSocial: z
        .string()
        .nonempty({ message: "La razón social es obligatoria" }),
    cuit: z
        .string()
        .nonempty({ message: "El CUIT/CUIL es obligatorio" })
        .length(13, { message: "El CUIT/CUIL debe tener 11 números" }),
    address: z.string(),
    location: z.string().nonempty({ message: "La localidad es obligatoria" }),
    province: z.string().nonempty({ message: "Seleccione una provincia" }),
    name: z.string().nonempty({ message: "El nombre es obligatorio" }),
    surname: z.string().nonempty({ message: "El apellido es obligatorio" }),
    phone: z
        .string({ message: "El teléfono es obligatorio" })
        .nonempty({ message: "El teléfono es obligatorio" }),
    email: z
        .union([z.email({ message: "El correo no es valido" }), z.literal("")])
        .nullable()
        .optional(),
});

export type SocialMotiveSchema = z.infer<typeof socialMotiveSchema>;

export default socialMotiveSchema;
