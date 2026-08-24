import { css, sva } from "@styled-system/css";

export const compactModal = css.raw({
    width: { base: "100%", md: "420px" },
    minHeight: 0,
});

export const modalStyles = sva({
    slots: ["overlay", "modal", "header", "title", "closeButton", "body"],
    base: {
        overlay: {
            position: "fixed",
            top: "64px",
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 70,
            padding: "24px 1rem",
            overflowY: "auto",
        },
        modal: {
            backgroundColor: "white",
            borderRadius: "lg",
            padding: "2rem",
            width: { base: "100%", md: "50%" },
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "lg",
            boxSizing: "border-box",
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
            flexShrink: 0,
        },
        title: {
            fontSize: "md",
            fontWeight: "semibold",
            color: "fg.default",
            margin: 0,
        },
        body: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
    },
}).raw();
