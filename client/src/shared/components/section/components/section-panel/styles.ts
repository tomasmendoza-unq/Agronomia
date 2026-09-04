import { css } from "@styled-system/css";

export const panel = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: 0,
});

export const header = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

export const title = css({
    fontSize: "md",
    fontWeight: "semibold",
    color: "fg.default",
    margin: 0,
});

export const body = css({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
});
