import { sva } from "@styled-system/css";

export const modalStyles = sva({
    slots: ["overlay", "modal", "header", "title", "closeButton", "body"],
    base: {
        overlay: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "1rem",
        },
        modal: {
            backgroundColor: "white",
            borderRadius: "lg",
            padding: "2rem",
            width: "50%",
            maxWidth: "100%",
            minHeight: "500px",
            maxHeight: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "lg",
            overflow: "hidden",
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
