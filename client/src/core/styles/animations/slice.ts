import { defineKeyframes } from "@pandacss/dev";

export const slice = defineKeyframes({
    sliceInX: {
        '0%': { transform: 'translateX(-200%)' },
        '100%': { transform: 'translateX(0)' }
    },
    sliceOutX: {
        '0%': { transform: 'translateX(200%)' },
        '100%': { transform: 'translateX(0)' }
    },
    sliceInY: {
        '0%': { transform: 'translateY(-500%)' },
        '100%': { transform: 'translateY(0)' }
    },
    sliceOutY: {
        '0%': { transform: 'translateY(200%)' },
        '100%': { transform: 'translateY(0)' }
    }
})