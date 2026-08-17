import { defineTokens } from "@pandacss/dev";

const tokenBorder = defineTokens.borders({
    borderRadius: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "16px" },
    },
    borderWidth: {
        thin: { value: "1px" },
        thick: { value: "2px" },
    },
    borderColor: {
        primary: { value: "#E2E2E2" },
    },
});

export default tokenBorder;
