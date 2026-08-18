import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const wrapper = css.raw({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "44px",
    padding: 0,
    border: "1px solid #A1A1AA",
    borderRadius: "10px",
    boxShadow: "0px 1px 2px rgba(2, 6, 23, 0.05)",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "white",
});

const fileName = css.raw({
    flex: 1,
    padding: "0 12px",
    fontSize: "14px",
    color: token("colors.textSubtle"),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});

const button = css.raw({
    flexShrink: 0,
    padding: "12px 20px",
    backgroundColor: token("colors.primaryColor"),
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.15s ease",
    "&:hover": {
        backgroundColor: token("colors.primaryColorHover"),
    },
});

const hiddenInput = css.raw({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
});

export const styles = sva({
    slots: ["wrapper", "fileName", "button", "hiddenInput"],
    base: {
        wrapper: wrapper,
        fileName: fileName,
        button: button,
        hiddenInput: hiddenInput,
    },
}).raw();
