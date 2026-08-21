import { defineTokens } from "@pandacss/dev";

const tokenColors = defineTokens.colors({
    primaryColor: { value: "#0E5CA5" },
    primaryColorHover: { value: "#0B4A8C" },
    surfacePageColor: { value: "#F8F7F6" },
    surfaceCardColor: { value: "#FFFFFF" },
    danger: { value: "#E11D48" },
    success: { value: "#0C9588" },
    primaryColorSubtle: { value: "#638BAF" },
    textSubtle: { value: "#71717A" },
    textMuted: {value: '#A1A1AA'}
});

export default tokenColors;
