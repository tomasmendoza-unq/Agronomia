import * as z from "zod"; 

const naturalPersonSchema = z.object({
    cuit: z
        .string()
        .nonempty({message: "El CUIT/CUIL es obligatorio"})
        .length(13, {message: "El CUIT/CUIL debe tener 11 números"}),
    name: z
        .string()
        .nonempty({message: "El nombre es obligatorio"}),
    surname: z
        .string()
        .nonempty({message: "El apellido es obligatorio"}),
    phone: z.number({message: "El teléfono es obligatorio"}),
    email: z.email({message: "El correo no es valido"}),
    address: z
        .string()
        .transform((value) => value.trim().toLowerCase()),
    location: z
        .string()
        .nonempty({message: "Seleccione una localidad"}),
    province: z
        .string()
        .nonempty({message: "Seleccione una provincia"}),
});

export type NaturalPersonSchema = z.infer<typeof naturalPersonSchema>;

export default naturalPersonSchema;