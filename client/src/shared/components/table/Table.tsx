import type { TablePaginator } from "@/shared/types/table/Table";
import {
    tableWrapper,
    tableCard,
    table,
    thead,
    th,
    tbody,
    tr,
    td,
    tdActions,
    pagination,
    paginationButton,
    footerText,
} from "./style";

interface TableProps<T> extends TablePaginator<T> {
    onPageChange?: (page: number) => void;
    renderCell?: (value: T, key: keyof T) => React.ReactNode;
}

export const Table = <T extends Record<string, unknown>>({
    headers = [],
    rows = [],
    page = 0,
    totalElements = 0,
    totalPages = 0,
    last = true,
    onPageChange,
    renderCell,
}: TableProps<T>) => {
    return (
        <div className={tableWrapper}>
            <div className={tableCard}>
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
                                            ? renderCell(
                                                  row.data,
                                                  key as keyof T,
                                              )
                                            : String(row.data[key as keyof T])}
                                    </td>
                                ))}
                                {row.actions && (
                                    <td className={tdActions}>{row.actions}</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {onPageChange && (
                <div className={pagination}>
                    <button
                        className={paginationButton}
                        disabled={page === 0}
                        onClick={() => onPageChange(page - 1)}
                    >
                        Anterior
                    </button>
                    <span className={footerText}>
                        Página {page + 1} de {totalPages} ({totalElements}{" "}
                        elementos)
                    </span>
                    <button
                        className={paginationButton}
                        disabled={last}
                        onClick={() => onPageChange(page + 1)}
                    >
                        Siguiente
                    </button>
                </div>
            )}

            <span className={footerText}>
                Mostrando {rows.length} de {totalElements} usuarios
            </span>
        </div>
    );
};

export default Table;
