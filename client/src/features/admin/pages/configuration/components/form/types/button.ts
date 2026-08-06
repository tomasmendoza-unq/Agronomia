import type { ButtonData } from "@/shared/components/credentials-form/types/button/credentials-button";

function createUserButton(onCreate: () => void): ButtonData {
    return {
        text: "Crear usuario",
        onSubmit: onCreate,
    };
}

export default createUserButton;
