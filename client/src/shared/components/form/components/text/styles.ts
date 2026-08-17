import { sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const styles = sva({
    slots: ["container", "label"],
    base: {
        container: {
            display: "grid",
            placeItems: "center",
            gap: "6px",
            width: "100%",
        },
        label: {
            width: "90%",
            color: token("colors.textSubtle"),
        },
    },
}).raw();
