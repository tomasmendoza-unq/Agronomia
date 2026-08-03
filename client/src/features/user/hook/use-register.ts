import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { User } from "../types/user";
import register from "../service/register";

export const useRegister = () => {
    const { data, error, isLoading, execute } = useFetch<User>();

    return {
        user: data,
        isLoading,
        error,
        register: execute(register),
    };
};
