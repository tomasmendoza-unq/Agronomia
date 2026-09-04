import { defineKeyframes } from "@pandacss/dev";

export const fade = defineKeyframes({
    fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
    },
    fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 }
    }
});