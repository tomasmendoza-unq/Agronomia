import { css } from "@styled-system/css";

export const panel = css({
    width: "100%",
    minWidth: 0,
    height: "100%",
    bg: "surfacePageColor",
});

export const h1 = css({
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4",
});

export const contentGrid = css({
    display: "grid",
    gridTemplateColumns: "minmax(0, 320px) minmax(0, 1fr)",
    gap: "8",
    alignItems: "start",
    "@media (max-width: 1024px)": {
        gridTemplateColumns: "1fr",
    },
});
