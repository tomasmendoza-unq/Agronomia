import z from "zod";

const schema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.email("El correo electrónico no es válido").min(1, "El correo es requerido"),
    rol: z.string(),
});

export default schema;