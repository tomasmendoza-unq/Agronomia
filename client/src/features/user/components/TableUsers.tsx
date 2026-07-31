import { useEffect } from "react";
import { UseGetUsers } from "../hook/get-users";
import type { User } from "../types/user";
import Table from "@/shared/components/table/Table";

export const TableUsers = () => {
    const { users, getUsers } = UseGetUsers();

    useEffect(() => {
        getUsers();
    }, []);

    if (!users) return <p>Cargando usuarios...</p>;

    return (
        <Table<User>
            headers={users.headers}
            rows={users.rows}
            page={users.page}
            size={users.size}
            totalElements={users.totalElements}
            totalPages={users.totalPages}
            last={users.last}
            onPageChange={(page) => console.log("cambiar a página", page)}
        />
    );
};

export default TableUsers;
