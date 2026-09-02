import { sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const fieldStyles = sva({
    slots: ["container", "label", "required"],
    base: {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
            width: "100%",
        },
        label: {
            width: "100%",
            textAlign: "left",
            color: token("colors.textSubtle"),
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
        },
        required: {
            color: "#dc2626",
            fontWeight: 700,
            lineHeight: 1,
        },
    },
}).raw();
