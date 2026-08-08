import { css } from "@styled-system/css";

export const overlay = css({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    padding: "1rem",
});

export const modal = css({
    backgroundColor: "white",
    borderRadius: "lg",
    padding: "2rem",
    width: "100%",
    maxWidth: "640px",
    minHeight: "400px",
    maxHeight: "95vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "lg",
    overflow: "hidden",
    boxSizing: "border-box",
});

export const header = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
    flexShrink: 0,
});

export const title = css({
    fontSize: "md",
    fontWeight: "semibold",
    color: "fg.default",
    margin: 0,
});

export const closeButton = css({
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "md",
    color: "fg.muted",
    _hover: { color: "fg.default" },
});

export const body = css({
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    flex: "1 1 auto",
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: "0.5rem",
    paddingTop: "0.5rem",
    boxSizing: "border-box",
    "& input, & select, & textarea, & button": {
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
    },
    "& p:empty, & span:empty": {
        display: "none", // oculta placeholders de error vacíos que reservan altura
    },
});
