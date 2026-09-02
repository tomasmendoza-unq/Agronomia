import { css, sva } from "@styled-system/css";

export const compactModal = css.raw({
    width: "min(420px, calc(100vw - 32px))",
    maxWidth: "100%",
    minHeight: 0,
    padding: "24px 24px 20px",
});

export const modalStyles = sva({
    slots: ["overlay", "modal", "header", "title", "closeButton", "body"],
    base: {
        overlay: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(24, 24, 27, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "24px 16px",
            overflowY: "auto",
        },
        modal: {
            position: "relative",
            zIndex: 201,
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
