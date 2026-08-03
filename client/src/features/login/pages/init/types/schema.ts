import type { Credentials } from "@/features/auth/types/credentials";
import { object, string, type ObjectSchema } from "yup";

const schema: ObjectSchema<Credentials> = object({
  email: string()
    .email("Ingrese un correo valido")
    .required("Email is required"),
  password: string()
    .required("Password is required"),
});

export default schema;