import { css } from "@styled-system/css";

export const wrap = css({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
});

export const wrapLogo = css({
    width: "2rem",
    height: "2rem",
    borderRadius: "full",
    objectFit: "cover",
});

export const wrapLabel = css({
    fontSize: "sm",
    fontWeight: "semibold",
    color: "fg.default",
    whiteSpace: "nowrap",
});
