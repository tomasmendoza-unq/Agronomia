import * as z from "zod"; 

const schema = z.object({
  email: z.email("Ingrese un correo valido"),
  password: z.string("Ingrese una contraseña"),
});

export type CredentialsSchema = typeof schema;

export default schema;