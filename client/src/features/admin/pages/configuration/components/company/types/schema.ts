import z from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const schema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    legalName: z.string().min(1, "La razón social es requerida"),
    cuit: z.string().min(1, "El CUIT es requerido"),
    logo: z
        .instanceof(File)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
            message: "El logo debe ser JPG, PNG o WEBP",
        }),
});

export default schema;
