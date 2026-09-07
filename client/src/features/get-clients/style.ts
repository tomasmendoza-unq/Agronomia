import { sva } from "@styled-system/css";

export const styles = sva({
    slots: ["container", "spinnerWrapper"],
    base: {
        container: { 
            width: { 
                base: "100%",
                lg: "100%"
            },
            paddingTop: "4", 
            paddingBottom: "4" },
        spinnerWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8",
        },
    },
});
