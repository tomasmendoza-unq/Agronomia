import { useContext } from "react";
import AuthContext from "../context/auth.context";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "El contexto no está siendo colocado para el suscriptor",
        );
    }

    return context;
};