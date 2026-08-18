import { sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const fieldStyles = sva({
    slots: ["container", "label"],
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
        },
    },
}).raw();
