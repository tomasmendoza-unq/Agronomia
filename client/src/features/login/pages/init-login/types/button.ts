import type { Credentials } from "../../../../auth/types/credentials";
import type { ButtonData } from "../../../../../shared/components/credentials-form/types/button/credentials-button";

function loginButton(
    onLogin: (credentials: Credentials) => void,
): ButtonData<Credentials> {
    return {
        text: "Iniciar Sesión",
        onSubmit: onLogin,
    };
}

export default loginButton;
