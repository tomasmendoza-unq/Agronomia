import * as z from "zod";

const naturalPersonSchema = z.object({
    cuit: z
        .string()
        .nonempty({ message: "El CUIT/CUIL es obligatorio" })
        .length(13, { message: "El CUIT/CUIL debe tener 11 números" }),
    name: z.string().nonempty({ message: "El nombre es obligatorio" }),
    surname: z.string().nonempty({ message: "El apellido es obligatorio" }),
    phone: z
        .string({ message: "El teléfono es obligatorio" })
        .nonempty({ message: "El teléfono es obligatorio" }),
    email: z
        .union([z.email({ message: "El correo no es valido" }), z.literal("")])
        .nullable()
        .optional(),
    address: z.string(),
    location: z.string().nonempty({ message: "Seleccione una localidad" }),
    province: z.string().nonempty({ message: "Seleccione una provincia" }),
});

export type NaturalPersonSchema = z.infer<typeof naturalPersonSchema>;

export default naturalPersonSchema;
