import type { HttpError } from "@/core/server/errors/http-error";
import type { User } from "@/shared/domain/user/user";
import type { Credentials } from "../types/credentials";

export interface UseAuth {
    user: User | undefined;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: HttpError | undefined;
    login: (credentials: Credentials) => Promise<void>;
    logout: (credentials: Credentials) => Promise<void>;
}
