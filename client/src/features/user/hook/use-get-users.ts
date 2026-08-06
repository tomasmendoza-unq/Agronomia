import type { TablePaginator } from "@/shared/types/table/Table";

import { useCallback, useState } from "react";
import getUsersService from "@/features/user/service/get-users";
import type { User } from "@/shared/domain/user/user";

export const UseGetUsers = () => {
    const [users, setUsers] = useState<TablePaginator<User> | null>(null);

    const getUsers = useCallback(async () => {
        try {
            const data = await getUsersService();
            setUsers(data);
        } catch (err) {
            setUsers(null);
        }
    }, []);

    const addUser = useCallback(async (newUser: User) => {
        setUsers((prev) => {
            const base =
                prev ??
                ({
                    headers: ["Nombre", "Email", "Rol"],
                    rows: [],
                    page: 0,
                    size: 10,
                    totalElements: 0,
                    totalPages: 0,
                    last: true,
                } as TablePaginator<User>);

            const newRow = {
                id: base.rows.length + 1,
                data: newUser,
            };

            return {
                ...base,
                rows: [...base.rows, newRow],
                totalElements: base.totalElements + 1,
            };
        });
    }, []);

    return { users, getUsers, addUser };
};
