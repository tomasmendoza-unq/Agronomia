import { css } from "@styled-system/css";

export const overlay = css({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
});

export const modal = css({
    backgroundColor: "white",
    borderRadius: "lg",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "480px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "lg",
});

export const header = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
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
    gap: "1rem",
});
