import { css, sva } from "@styled-system/css";

const container = css.raw({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    padding: "48px 24px",
    border: "1px solid #EEEEEE",
    borderRadius: "13px",
    backgroundColor: "white",
    textAlign: "center",
});

const iconWrapper = css.raw({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "64px",
    height: "64px",
    marginBottom: "8px",
    color: "#B8ADA4",
    "& svg": {
        width: "56px",
        height: "56px",
    },
});

const title = css.raw({
    margin: 0,
    fontSize: "15px",
    fontWeight: "bold",
    color: "#333333",
    "& strong": {
        color: "primaryColor",
    },
});

const description = css.raw({
    margin: 0,
    marginBottom: "14px",
    fontSize: "13px",
    color: "#888888",
});

export const styles = sva({
    slots: ["container", "iconWrapper", "title", "description"],
    base: { container, iconWrapper, title, description },
});
