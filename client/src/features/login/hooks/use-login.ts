import { ErrorCause } from "@/core/server/types/error-cause";
import { useAuth } from "@/features/auth/hooks/use-auth";
import type { Credentials } from "../../auth/types/Credentials";
import type { User } from "@/shared/domain/user/user";
import { useNavigate } from "react-router";
import { ADMIN_ROUTES } from "@/core/routes/admin";

const useLogin = () => {
    const { refresh, error, login: log } = useAuth();
    const navegation = useNavigate();

    const isError = error?.isCause(ErrorCause.INVALID_CREDENTIALS);

    async function login(credentials: Credentials) {
        const user = await log(credentials);
        if (user) navegate(user);
    }

    function navegate(user: User) {
        switch (user.role) {
            case "DUENIO":
                navegation(ADMIN_ROUTES.BASE);
        }
    }

    return { isError, login, refresh };
};

export default useLogin;
