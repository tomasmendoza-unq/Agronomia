import { useAuth } from "./use-auth";

export const useHasRole = (allowedRoles?: string[]) => {
    const { user } = useAuth();

    if (!allowedRoles || allowedRoles.length === 0) return true;
    if (!user?.role) return false;

    return allowedRoles.includes(user.role);
};
