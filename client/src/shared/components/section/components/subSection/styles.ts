import { css, sva } from "@styled-system/css";

const sectionGroup = css.raw({
    display: "flex",
    flexDirection: "column",
    gap: "7px",
});

const sectionTitle = css.raw({
    margin: 0,
    color: "#666666",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "1.2",
});

export const styles = sva({
    slots: ["sectionGroup", "sectionTitle"],
    base: {
        sectionGroup,
        sectionTitle,
    },
});
