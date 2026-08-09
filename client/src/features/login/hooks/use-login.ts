import { ErrorCause } from "@/core/server/types/error-cause";
import { useAuth } from "@/features/auth/hooks/use-auth";
import type { Credentials } from "../../auth/types/Credentials";

import { useNavigate } from "react-router";
import { ADMIN_ROUTES } from "@/core/routes/admin";

const useLogin = () => {
    const { refresh, error, login: log } = useAuth();
    const navegation = useNavigate();

    const isError = error?.isCause(ErrorCause.INVALID_CREDENTIALS);

    async function login(credentials: Credentials) {
        const user = await log(credentials);
        if (user) navegation(ADMIN_ROUTES.BASE);
    }

    return { isError, login, refresh };
};

export default useLogin;
