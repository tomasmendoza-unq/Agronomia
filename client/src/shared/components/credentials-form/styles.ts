import { css, sva } from "@styled-system/css";

const container = css.raw({
    display: "grid",
    placeItems: "center",
    width: "90%",
    maxWidth: "500px",
    minWidth: "40vw",
    height: "80%",
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
