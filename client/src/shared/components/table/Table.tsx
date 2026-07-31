import type { TablePaginator } from "@/shared/types/table/Table";
import { tableWrapper, table, thead, th, tbody, tr, td } from "./styles";

interface TableProps<T> extends TablePaginator<T> {
    onPageChange?: (page: number) => void;
    renderCell?: (value: T, key: keyof T) => React.ReactNode;
}

export const Table = <T extends Record<string, unknown>>({
    headers,
    rows,
    page,
    size,
    totalElements,
    totalPages,
    last,
    onPageChange,
    renderCell,
}: TableProps<T>) => {
    return (
        <div className={tableWrapper}>
            <table className={table}>
                <thead className={thead}>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className={th}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={tbody}>
                    {rows.map((row) => (
                        <tr
                            key={row.id}
                            className={tr}
                        >
                            {Object.keys(row.data).map((key) => (
                                <td
                                    key={key}
                                    className={td}
                                >
                                    {renderCell
                                        ? renderCell(row.data, key as keyof T)
                                        : String(row.data[key as keyof T])}
                                </td>
                            ))}
                            {row.actions && (
                                <td className={td}>{row.actions}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {onPageChange && (
                <div className={tableWrapper}>
                    <button
                        disabled={page === 0}
                        onClick={() => onPageChange(page - 1)}
                    >
                        Anterior
                    </button>
                    <span>
                        Página {page + 1} de {totalPages} ({totalElements}{" "}
                        elementos)
                    </span>
                    <button
                        disabled={last}
                        onClick={() => onPageChange(page + 1)}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
};

export default Table;
