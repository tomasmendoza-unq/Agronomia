import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const navBar = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    width: "100%",
    minHeight: "64px",
    padding: "14px",
    position: "relative",
    zIndex: 30,
});

export const navBarList = css({
    listStyleType: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
    display: { base: "none", md: "flex" },
});

export const wrapLogo = css({
    display: "flex",
    alignItems: "center",
});

export const item = css({
    color: token("colors.textSubtle")
})

export const selectedItem = css({
    color: "#09090B",
    fontWeight: "semibold",
});

export const menuButton = css({
    display: { base: "inline-flex", md: "none" },
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "md",
    color: "textColor",
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderColor: "borderSubtle",
    cursor: "pointer",
    _focusVisible: {
        outlineWidth: "2px",
        outlineColor: "textColor",
        outlineOffset: "2px",
    },
    "& svg": {
        width: "20px",
        height: "20px",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
    },
});

export const mobileOnly = css({
    display: { base: "block", md: "none" },
});

export const overlay = css({
    position: "fixed",
    inset: 0,
    zIndex: 40,
    width: "100%",
    height: "100%",
    border: 0,
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    cursor: "pointer",
});

export const drawer = css({
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 50,
    width: "min(82vw, 320px)",
    backgroundColor: "#FFF",
    boxShadow: "4px 0 18px rgba(0, 0, 0, 0.12)",
});

export const drawerContent = css({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "14px",
});

export const drawerList = css({
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginTop: "24px",
    "& a": {
        display: "block",
        padding: "10px 6px",
    },
});

export const drawerAvatar = css({
    display: "flex",
    paddingTop: "16px",
    marginTop: "auto",
    borderTopWidth: "1px",
    borderColor: "borderSubtle",
});
