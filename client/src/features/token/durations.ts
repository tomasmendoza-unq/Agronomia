import { defineTokens } from "@pandacss/dev";

export const durationsToken = defineTokens.durations({
    fast: { value: '0.1s' },
    medium: { value: '0.3s' },
    slow: {value: '0.5s' }
});