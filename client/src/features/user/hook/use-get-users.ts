import type { TablePaginator } from "@/shared/types/table/Table";

import getUsersService from "@/features/user/service/get-users";
import type { User } from "@/shared/domain/user/user";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";

export const UseGetUsers = () => {
    const { data, execute, isLoading } = useFetch<TablePaginator<User>>();

    return {
        users: data,
        usersLoading: isLoading,
        getUsers: execute(getUsersService),
    };
};
