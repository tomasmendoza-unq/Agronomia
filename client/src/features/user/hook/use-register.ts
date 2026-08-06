import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import register from "../service/register";
import type { User } from "@/shared/domain/user/user";

export const useRegister = () => {
    const { data, error, isLoading, execute } = useFetch<User>();

    return {
        user: data,
        isLoading,
        error,
        register: execute(register),
    };
};
