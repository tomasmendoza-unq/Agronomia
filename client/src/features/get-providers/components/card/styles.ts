import { css } from "@styled-system/css";

export const card = css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "302px",
    minHeight: "458px",
    padding: "18px",
    border: "1px solid #D4D4D4",
    borderRadius: "13px",
    backgroundColor: "surfaceCardColor",
    color: "#333333",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.02)",
});

export const header = css({ display: "flex", alignItems: "center", gap: "13px" });

export const initials = css({
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    borderRadius: "full",
    backgroundColor: "#E5F0FA",
    color: "#374151",
    fontSize: "12px",
    fontWeight: "medium",
});

export const providerName = css({
    margin: 0,
    overflow: "hidden",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "1.2",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const companyData = css({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "12px",
});

export const dataGroup = css({ display: "flex", flexDirection: "column", gap: "2px" });

export const label = css({
    color: "textSubtle",
    fontSize: "12px",
    fontWeight: "medium",
    lineHeight: "1.2",
});

export const value = css({
    margin: 0,
    fontSize: "14px",
    fontWeight: "semibold",
    lineHeight: "1.25",
});

export const divider = css({
    width: "100%",
    height: "1px",
    marginTop: "54px",
    marginBottom: "19px",
    border: 0,
    backgroundColor: "#D4D4D4",
});

export const contacts = css({ display: "flex", flexDirection: "column", gap: "18px" });
export const contactGroup = css({ display: "flex", flexDirection: "column", gap: "5px" });

export const sectionTitle = css({
    margin: 0,
    color: "#666666",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "1.2",
});

export const contactDetail = css({
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "textSubtle",
    fontSize: "12px",
    lineHeight: "1.2",
});

export const contactIcon = css({ flexShrink: 0, width: "12px", height: "12px", color: "#7A7A7A" });

export const paymentSection = css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "18px",
});

export const paymentRow = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
});

export const paymentText = css({ color: "textSubtle", fontSize: "12px", lineHeight: "1.2" });

export const pricesLink = css({
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    border: 0,
    background: "transparent",
    color: "#555555",
    fontSize: "12px",
    cursor: "pointer",
    _hover: { color: "primaryColor" },
});

export const pricesLinkIcon = css({ width: "12px", height: "12px" });

export const pricesButton = css({
    alignSelf: "flex-start",
    marginTop: "auto",
    padding: "9px 13px",
    border: 0,
    borderRadius: "6px",
    backgroundColor: "primaryColor",
    color: "white",
    fontSize: "14px",
    fontWeight: "medium",
    lineHeight: "1.2",
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    _hover: { backgroundColor: "primaryColorHover" },
});
