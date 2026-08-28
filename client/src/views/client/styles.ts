import { css, sva } from "@styled-system/css";

const container = css.raw({
    display: "grid",
    width: "100%"
});

const optionsContainer = css.raw({
    justifySelf: "center",
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "space-between",
    width: "100%"
});

const title = css.raw({
    fontSize: "24px"
});

const styles = sva({
    slots: ["container", "optionsContainer", "title"],
    base: {
        container: container,
        optionsContainer: optionsContainer,
        title: title
    }
});

export default styles;