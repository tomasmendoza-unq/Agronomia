import { css } from "@styled-system/css/css";

export const toastContainer = css.raw({
    bg: "white",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: "280px",
});

export const toastHeader = css({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    fontSize: "14px",
    color: "gray.800",
    "& img": {
        width: "18px",
        height: "18px",
    },
    "& button": {
        marginLeft: "auto",
        color: "gray.400",
        cursor: "pointer",
        _hover: {
            color: "gray.600",
        },
    },
});

export const toastMessage = css({
    fontSize: "13px",
    color: "gray.500",
    marginLeft: "26px",
});

export const toastLink = css({
    fontSize: "13px",
    color: "primaryColor",
    fontWeight: "500",
    marginLeft: "26px",
    textDecoration: "underline",
    _hover: {
        color: "primaryColorSubtle",
    },
});
