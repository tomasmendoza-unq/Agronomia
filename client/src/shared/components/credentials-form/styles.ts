import { css } from "@styled-system/css";

export const container = css({
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

export const headerTitle = css({
    fontSize: "24px",
    fontWeight: "bold",
});
