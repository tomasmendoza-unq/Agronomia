import { css, sva } from "@styled-system/css";

const iconGroup = css.raw({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
});

const sectionTitle = css.raw({
    margin: 0,
    color: "#666666",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "1.2",
});

const iconDetail = css.raw({
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "textSubtle",
    fontSize: "12px",
    lineHeight: "1.2",
});

const icon = css.raw({
    flexShrink: 0,
    width: "12px",
    height: "12px",
    color: "#7A7A7A",
});

export const styles = sva({
    slots: ["iconGroup", "sectionTitle", "iconDetail", "icon"],
    base: {
        iconGroup,
        sectionTitle,
        iconDetail,
        icon,
    },
});
