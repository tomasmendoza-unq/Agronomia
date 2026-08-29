import { css, sva } from "@styled-system/css";

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
    slots: ["iconDetail", "icon"],
    base: {
        iconDetail,
        icon,
    },
});
