import type { User } from "@/features/admin/types/User";
import Table from "@/shared/components/table/Table";
import type { TablePaginator } from "@/shared/types/table/Table";

export const TableUsers = ({
    users,
}: {
    isloading: boolean;
    users: TablePaginator<User>;
    allowNull?: boolean;
}) => {
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
