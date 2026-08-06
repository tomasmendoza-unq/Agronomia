import { defineKeyframes } from "@pandacss/dev";
import { fade } from "./fade";
import { slice } from "./slice";

const animations = defineKeyframes({
    ...fade, ...slice
});

export default animations;