import { css, sva } from "@styled-system/css";

const container = css.raw({
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "100%"
});

const styles = sva({
    slots: ["container"],
    base: {
        container: container
    }
});

export default styles;