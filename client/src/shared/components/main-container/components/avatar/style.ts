import { css } from "@styled-system/css";

export const avatarStyle = css({
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    minWidth: 0,
    color: "#111",
    textDecoration: "none",
});

export const avatarInitials = css({
    flexShrink: 0,
    width: "40px",
    height: "40px",
    borderRadius: "full",
    background: "#EAF2FA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#111",
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)",
});

export const avatarText = css({
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    fontSize: "sm",
    fontWeight: "semibold",
    lineHeight: "short",
    whiteSpace: "nowrap",
});

export const avatarRole = css({
    color: "#6B7280",
    fontSize: "xs",
    fontWeight: "normal",
});
