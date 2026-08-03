import type { User } from "@/features/user/types/user";
import Table from "@/shared/components/table/Table";
import type { TablePaginator } from "@/shared/types/table/Table";

export const TableUsers = ({
    isloading,
    users,
}: {
    isloading: boolean;
    users: TablePaginator<User> | null;
}) => {
    if (!users || isloading) return <p>Cargando usuarios...</p>;

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
