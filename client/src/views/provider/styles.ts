import { css, sva } from "@styled-system/css";

const panel = css.raw({
    width: "100%",
    minWidth: 0,
    height: "100%",
    bg: "surfacePageColor",
});

const h1 = css.raw({
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4",
});

const optionsRow = css.raw({
    display: "flex",
    flexDirection: { base: "column", sm: "row" },
    alignItems: { base: "stretch", sm: "center" },
    justifyContent: { base: "flex-start", sm: "space-between" },
    gap: "12px",
    marginTop: "16px",
});

export const styles = sva({
    slots: ["panel", "h1", "optionsRow"],
    base: {
        panel,
        h1,
        optionsRow,
    },
});
