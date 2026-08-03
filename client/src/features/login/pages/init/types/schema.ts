import * as z from "zod"; 

const schema = z.object({
  email: z.email("Ingrese un correo"),
  password: z.string().min(1, "Ingrese una contraseña"),
});

export type CredentialsSchema = typeof schema;

export default schema;