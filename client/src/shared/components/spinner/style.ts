import { cva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const spinner = cva({
    base: {
        display: "inline-block",
        borderRadius: "50%",
        border: "3px solid",
        borderColor: "#A1A1AA",
        borderTopColor: token("colors.primaryColor"),
        animation: "spin 0.8s linear infinite",
    },
    variants: {
        size: {
            sm: { width: "16px", height: "16px", borderWidth: "2px" },
            md: { width: "24px", height: "24px", borderWidth: "3px" },
            lg: { width: "40px", height: "40px", borderWidth: "4px" },
        },
        centered: {
            true: {
                display: "block",
                margin: "auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            },
        },
    },
    defaultVariants: {
        size: "md",
        centered: false,
    },
});
