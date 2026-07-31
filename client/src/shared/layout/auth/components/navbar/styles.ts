import { css } from "@styled-system/css";

export const navBar = css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    padding: "1rem",
    width: "100vw",
});

export const navBarList = css({
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
});

export const wrapLogo = css({
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
});
