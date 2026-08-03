import type { User } from "@/features/user/types/user";
import Table from "@/shared/components/table/Table";
import type { TablePaginator } from "@/shared/types/table/Table";

export const TableUsers = ({
    isloading,
    users,
    allowNull = false,
}: {
    isloading: boolean;
    users: TablePaginator<User> | null;
    allowNull?: boolean;
}) => {
    if (isloading) return <p>Cargando usuarios...</p>;

    if (!users) {
        if (!allowNull) return <p>Cargando usuarios...</p>;

        // Render table with empty/default values to avoid crashing
        return (
            <Table<User>
                headers={[]}
                rows={[]}
                page={0}
                size={0}
                totalElements={0}
                totalPages={0}
                last={true}
                onPageChange={(page) => console.log("cambiar a página", page)}
            />
        );
    }

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
