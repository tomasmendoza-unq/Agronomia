import type { InputData } from "../../../../../shared/types/input/credentials-input";

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
        placeholder: 'Ingrese su Contrseña',
        id: 1,
    }
];

export default loginInputs;