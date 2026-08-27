import { css } from "@styled-system/css";

export const editButton = css({
    alignSelf: "flex-end",
    padding: "2",
    cursor: "pointer",
    color: "primaryColor",
    _hover: {
        color: "primaryColorHover",
    },
    transition: "background-color 0.3s ease",
});

export const branch = css({
    display: "flex",
    flexDirection: "column",
    gap: "1",
    marginBottom: "3",
    maxHeight: "70px",
    overflowX: "auto",
});
