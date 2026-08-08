import { css } from "@styled-system/css";

export const tableWrapper = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    width: "100%",
});

export const tableCard = css({
    width: "100%",
    overflowX: "auto",
    backgroundColor: "white",
});

export const table = css({
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    minWidth: "760px",
});

export const thead = css({});

export const th = css({
    textAlign: "left",
    padding: "0.75rem 1rem",
    fontSize: "sm",
    color: "fg.muted",
    fontWeight: "600",
    backgroundColor: "transparent",
    borderBottom: "1px solid",
    borderColor: "border.subtle",
});

export const tbody = css({});

export const tr = css({
    borderBottom: "1px solid",
    borderColor: "border.subtle",
    _last: {
        borderBottom: "none",
    },
    _hover: {
        backgroundColor: "gray.25",
    },
});

export const td = css({
    padding: "0.9rem 1rem",
    fontSize: "sm",
    color: "fg.default",
    verticalAlign: "middle",
});

export const tdActions = css({
    padding: "0.9rem 1rem",
    display: "flex",
    justifyContent: "flex-start",
    gap: "1.25rem",
    alignItems: "center",
    whiteSpace: "nowrap",
});

export const pagination = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    paddingTop: "0.25rem",
});

export const paginationButton = css({
    minWidth: "120px",
    padding: "0.55rem 1rem",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: "border.subtle",
    backgroundColor: "white",
    color: "fg.default",
    fontSize: "sm",
    cursor: "pointer",
    _disabled: {
        opacity: 0.45,
        cursor: "not-allowed",
    },
});

export const footerText = css({
    fontSize: "xs",
    color: "fg.muted",
    paddingLeft: "0.25rem",
});
