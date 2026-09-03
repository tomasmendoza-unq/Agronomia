import { sva } from "@styled-system/css";

export const styles = sva({
    slots: ["container", "grid", "spinnerWrapper"],
    base: {
        container: { 
            width: { 
                base: "100%",
                lg: "70%"
            },
            paddingTop: "4", 
            paddingBottom: "4" },
        grid: {
            display: "grid",
            gridTemplateColumns: {
                base: "1fr",
                sm: "repeat(2, 1fr)",
            },
            justifyItems: "center",
            gap: "4",
        },
        spinnerWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8",
        },
    },
});
