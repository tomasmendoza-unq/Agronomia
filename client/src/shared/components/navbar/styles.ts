import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const navBar = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: "1rem 2rem",
    height: "9vh"
});

export const navBarList = css({
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
});

export const wrapLogo = css({
    display: "flex",
    alignItems: "center",
});

export const item = css({
    color: token("colors.textSubtle")
})

export const selectedItem = css({
    color: "#09090B"
})


