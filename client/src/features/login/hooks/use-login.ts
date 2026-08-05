import { ADMIN_ROUTES } from "@/core/routes/admin";
import { ErrorCause } from "@/core/server/types/error-cause";
import { useAuth } from "@/features/auth/hooks/use-auth";
import type { Credentials } from "@/features/auth/types/credentials";
import type { User } from "@/shared/domain/user/user";
import { useNavigate } from "react-router";

const useLogin = () => {

    const { refresh, user, error, login: log } = useAuth();
    const navegation = useNavigate();
    
    const isError = error?.isCause(ErrorCause.INVALID_CREDENTIALS);

    async function login(credentials: Credentials) {
        await log(credentials);
        if(user) navegate(user);
    }

    function navegate(user: User) {
        switch(user.rol) {
            case "ADMIN":
                navegation(ADMIN_ROUTES.BASE);
        }
    }

    return { isError, login, refresh }
}

export default useLogin;