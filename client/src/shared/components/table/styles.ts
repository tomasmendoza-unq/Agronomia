import { css } from "@styled-system/css";

export const tableWrapper = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%",
    overflowX: "auto",
});

export const table = css({
    width: "100%",
    borderCollapse: "collapse",
});

export const thead = css({
    backgroundColor: "gray.50",
});

export const th = css({
    textAlign: "left",
    padding: "0.75rem 1.5rem",
    fontSize: "xs",
    color: "fg.muted",
    fontWeight: "medium",
});

export const tbody = css({});

export const tr = css({
    borderBottom: "1px solid",
    borderColor: "border.subtle",
    _last: {
        borderBottom: "none",
    },
});

export const td = css({
    padding: "1rem 1.5rem",
    fontSize: "sm",
    color: "fg.default",
});

export const tdActions = css({
    padding: "1rem 1.5rem",
    fontSize: "sm",
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-end",
});

export const actionLink = css({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "xs",
    color: "colorPalette.600",
    cursor: "pointer",
    textDecoration: "underline",
    background: "none",
    border: "none",
});

export const footerText = css({
    fontSize: "xs",
    color: "fg.muted",
    padding: "0 1.5rem",
});
