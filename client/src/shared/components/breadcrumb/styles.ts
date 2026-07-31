import { css } from "@styled-system/css";

export const breadcrumbList = css({
    display: "flex",
    alignItems: "center",
    fontSize: "sm",
    color: "fg.muted",
    padding: "1rem 2rem 0",
});

export const breadcrumbItem = css({
    display: "flex",
    alignItems: "center",
});

export const breadcrumbLink = css({
    color: "fg.muted",
    textDecoration: "none",
    _hover: { textDecoration: "underline" },
});

export const separator = css({
    color: "fg.muted",
    margin: "0 0.4rem",
});
