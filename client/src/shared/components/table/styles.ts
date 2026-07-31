import { css } from "@styled-system/css";

export const tableWrapper = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    overflowX: "auto",
});

export const table = css({
    width: "100%",
    borderCollapse: "collapse",
});

export const thead = css({
    borderBottom: "1px solid",
    borderColor: "border.default",
});

export const th = css({
    textAlign: "left",
    padding: "0.75rem 1rem",
    fontSize: "xs",
    color: "fg.muted",
    fontWeight: "medium",
});

export const tbody = css({});

export const tr = css({
    borderBottom: "1px solid",
    borderColor: "border.subtle",
});

export const td = css({
    padding: "0.75rem 1rem",
    fontSize: "sm",
    color: "fg.default",
});
