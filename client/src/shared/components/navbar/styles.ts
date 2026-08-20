import { css } from "@styled-system/css";

export const navBar = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: "1rem 2rem",
    width: "100%",
});

export const navBarList = css({
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
});

export const wrapLogo = css({
    display: "flex",
    alignItems: "center",
});
