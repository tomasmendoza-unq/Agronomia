import type { ReactNode } from "react";
import { useHasRole } from "../hooks/use-has-role";

interface RoleGuardProps {
    allowedRoles: string[];
    children: ReactNode;
    fallback?: ReactNode;
}

export const RoleGuard = ({
    allowedRoles,
    children,
    fallback = null,
}: RoleGuardProps) => {
    const hasRole = useHasRole(allowedRoles);

    return hasRole ? <>{children}</> : <>{fallback}</>;
};
