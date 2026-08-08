import { css } from "@styled-system/css";

export const tableWrapper = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    boxShadow: "sm",
    width: "100%",
});

export const tableCard = css({
    width: "100%",
    overflowX: "auto",
    backgroundColor: "white",
    borderRadius: "md",
});

export const table = css({
    width: "100%",
    borderCollapse: "collapse", // Se cambia a collapse para manejar bordes limpios en las celdas
    minWidth: "760px",
});

export const thead = css({
    backgroundColor: "#F9FAFB", // Un gris muy tenue para la cabecera similar al prototipo
});

export const th = css({
    textAlign: "left",
    padding: "0.85rem 1rem",
    fontSize: "sm",
    color: "#6B7280",
    fontWeight: "600",
    borderBottom: "1px solid",
    borderColor: "#E5E7EB",
});

export const tbody = css({});

export const tr = css({
    transition: "background-color 0.2s ease",
    _hover: {
        backgroundColor: "#F9FAFB",
    },
});

export const td = css({
    padding: "1rem",
    fontSize: "sm",
    color: "#374151",
    verticalAlign: "middle",
    borderBottom: "1px solid",
    borderColor: "#E5E7EB",
});

export const tdActions = css({
    padding: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    gap: "1.25rem",
    alignItems: "center",
    whiteSpace: "nowrap",
    borderBottom: "1px solid",
    borderColor: "#E5E7EB",
});

export const pagination = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "0.5rem",
});

export const paginationButton = css({
    minWidth: "100px",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "#E5E7EB",
    backgroundColor: "white",
    color: "#374151",
    fontSize: "sm",
    cursor: "pointer",
    transition: "all 0.2s ease",
    _hover: {
        backgroundColor: "#F3F4F6",
    },
    _disabled: {
        opacity: 0.45,
        cursor: "not-allowed",
        _hover: {
            backgroundColor: "white",
        },
    },
});

export const footerText = css({
    fontSize: "xs",
    color: "#6B7280",
});
