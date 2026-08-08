import type { User } from "@/features/admin/types/User";
import Table from "@/shared/components/table/Table";
import type { TablePaginator } from "@/shared/types/table/Table";

interface TableUsersProps {
    isLoading?: boolean;
    users?: TablePaginator<User>;
    onPageChange?: (page: number) => void;
    onEdit?: (user: User) => void;
    onDelete?: (id: number) => void;
}

export const TableUsers = ({
    isLoading = false,
    users,
    onPageChange,
    onEdit,
    onDelete,
}: TableUsersProps) => {
    if (isLoading) {
        return <div>Cargando usuarios...</div>;
    }
    if (!users) {
        return <div>No hay usuarios disponibles.</div>;
    }
    const formattedRows = users.rows.map((row) => ({
        ...row,
        actions:
            onEdit || onDelete ? (
                <div style={{ display: "flex", gap: "8px" }}>
                    {onEdit && (
                        <button onClick={() => onEdit(row.data)}>Editar</button>
                    )}
                    {onDelete && (
                        <button onClick={() => onDelete(row.id)}>
                            Eliminar
                        </button>
                    )}
                </div>
            ) : undefined,
    }));

    return (
        <Table<User>
            columns={users.columns}
            rows={formattedRows}
            page={users.page}
            size={users.size}
            totalElements={users.totalElements}
            totalPages={users.totalPages}
            last={users.last}
            onPageChange={onPageChange}
        />
    );
};

export default TableUsers;
