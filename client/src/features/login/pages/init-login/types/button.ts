import type { ButtonData } from "@/shared/types/button/button";

function loginButton(onLogin: () => void): ButtonData {
    return {
        text: 'Iniciar Sesión',
        onSubmit: onLogin,
    }
}

export default loginButton;