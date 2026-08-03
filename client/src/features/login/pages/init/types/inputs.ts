import type { InputData } from "../../../../../shared/components/credentials-form/types/input/credentials-input";

const loginInputs: InputData[] = [
    {
        type: 'email',
        name: 'email',
        title: 'Email',
        placeholder: 'Ingrese su Email',
        id: 0,
    },
    {
        type: 'password',
        name: 'password',
        title: 'Contraseña',
        placeholder: 'Ingrese su Contraseña',
        id: 1,
    }
];

export default loginInputs;