import { css, sva } from "@styled-system/css";

const container = css.raw({
    display: "grid",
    placeItems: "center",
    gridTemplateRows: "20% 50% 30%",
    width: "90%",
    maxWidth: "500px",
    minWidth: "40vw",
    height: "80%",
    bg: "#FFF",
    boxShadow:
        "0px 10px 15px -3px rgba(2, 6, 23, 0.1), 0px 4px 6px -4px rgba(2, 6, 23, 0.1)",
    borderRadius: "1vw",
});

const containerCompact = css.raw({
    display: "grid",
    placeItems: "center",
    gridTemplateRows: "auto 1fr auto",
    width: "100%",
    maxWidth: "440px",
    minWidth: "280px",
    height: "auto",
    padding: "1.25rem",
    bg: "#FFF",
    boxShadow:
        "0px 10px 15px -3px rgba(2, 6, 23, 0.1), 0px 4px 6px -4px rgba(2, 6, 23, 0.1)",
    borderRadius: "8px",
});

const headerTitle = css.raw({
    fontSize: "24px",
    fontWeight: "bold",
});

export const styles = sva({
    slots: ["container", "headerTitle"],
    base: {
        container: container,
        headerTitle: headerTitle,
    },
});
export const compactContainer = containerCompact;
