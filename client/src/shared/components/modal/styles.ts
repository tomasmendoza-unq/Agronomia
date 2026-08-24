import { sva } from "@styled-system/css";

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
            alignItems: "center",
            justifyContent: "center",
            zIndex: 90,
            padding: "24px 1rem",
        },
        modal: {
            backgroundColor: "white",
            borderRadius: "lg",
            padding: "2rem",
            width: { base: "100%", md: "50%" },
            maxWidth: "100%",
            maxHeight: "calc(100dvh - 112px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "lg",
            overflowY: "auto",
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
        body: {},
    },
}).raw();
