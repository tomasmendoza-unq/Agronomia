import * as z from "zod"; 
import adapterCuit from "../../adapter/cuit";

const naturalPersonSchema = z.object({
    cuit: z
        .string()
        .nonempty({message: "El CUIT/CUIL es obligatorio"})
        .length(13, {message: "El CUIT/CUIL debe tener 11 números"})
        .transform(value => adapterCuit(value)),
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
    place: z
        .string()
        .nonempty({message: "Seleccione una localidad"}),
    province: z
        .string()
        .nonempty({message: "Seleccione una provincia"}),
});

export type CredentialsSchema = typeof naturalPersonSchema;

export default naturalPersonSchema;