import * as z from "zod"; 

const socialMotiveSchema = z.object({
    razonSocial: z
        .string()
        .nonempty({message: "La razón social es obligatoria"}),
    cuit: z
        .string()
        .nonempty({message: "El CUIT/CUIL es obligatorio"})
        .length(13, {message: "El CUIT/CUIL debe tener 11 números"}),
    address: z
        .string()
        .transform((value) => value.trim().toLowerCase()),
    location: z
        .string()
        .nonempty({message: "La localidad es obligatoria"}),
    province: z
        .string()
        .nonempty({message: "Seleccione una provincia"}),
    name: z
        .string()
        .nonempty({message: "El nombre es obligatorio"}),
    surname: z
        .string()
        .nonempty({message: "El apellido es obligatorio"}),
    phone: z.number({message: "El teléfono es obligatorio"}),
    email: z.email({message: "El correo no es valido"}),
});

export type SocialMotiveSchema = z.infer<typeof socialMotiveSchema>;

export default socialMotiveSchema;