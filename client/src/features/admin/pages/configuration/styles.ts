import { css } from "@styled-system/css";

export const panel = css({
    width: "100%",
    height: "100%",
    bg: "surfacePageColor",
});

export const buttonAddUser = css({
    padding: "2",
    cursor: "pointer",
    color: "#7AA12B",
    border: "1px solid #7AA12B",
    borderRadius: "sm",
    transition: "background-color 0.3s ease",
    "&:hover": {
        backgroundColor: "#7AA12B",
        color: "#fff",
    },
});

export const h1 = css({
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4",
});
