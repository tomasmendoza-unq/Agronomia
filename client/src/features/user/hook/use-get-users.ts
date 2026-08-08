import type { TablePaginator } from "@/shared/types/table/Table";
import getUsersService from "@/features/user/service/get-users";
import useFetch from "@/shared/hooks/use-fetch/useFetch.hook";
import type { User } from "@/features/admin/types/User";

export const UseGetUsers = () => {
    const { data, execute, isLoading, error } =
        useFetch<TablePaginator<User>>();

    const getUsers = (page: number = 0, size: number = 5) => {
        return execute(() => getUsersService(page, size))();
    };

    return {
        users: data,
        usersLoading: isLoading,
        getUsers,
        error,
    };
};

export default UseGetUsers;
