import type { ButtonData } from "@/shared/types/button/credentials-button";

function createUserButton(onCreate: () => void): ButtonData {
    return {
        text: "Crear usuario",
        onSubmit: onCreate,
    };
}

export default createUserButton;
