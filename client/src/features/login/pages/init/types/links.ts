import type { LinkData } from "@/shared/components/forms/simple-form/types/link/Link";

const loginLinks: LinkData[] = [
    {
        path: '',
        question: '¿Olvidaste tu Contraseña?',
        title: 'Recuperar contraseña',
        id: 0,
    },
    {
        path: '',
        question: '¿Necesitas ayuda?',
        title: 'Contactar a Soporte',
        id: 1
    }
];

export default loginLinks;