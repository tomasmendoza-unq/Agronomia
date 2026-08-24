import { css } from "@styled-system/css";

export const authLayout = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
    bg: "surfacePageColor",
    color: "textColor",
});

export const bodyWrapper = css({
    width: "96%",
    maxWidth: "1440px",
    minWidth: 0,
    paddingBottom: "24px",
});

