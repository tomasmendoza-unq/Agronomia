import { css } from "@styled-system/css";

export const card = css({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
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

export const header = css({
    display: "flex",
    alignItems: "center",
    gap: "13px",
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

export const label = css({
    color: "textSubtle",
    fontSize: "12px",
    fontWeight: "medium",
    lineHeight: "1.2",
});

export const divider = css({
    width: "100%",
    height: "1px",
    marginTop: "54px",
    marginBottom: "19px",
    border: 0,
    backgroundColor: "#D4D4D4",
});

export const paymentRow = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
});

export const paymentText = css({
    color: "textSubtle",
    fontSize: "12px",
    lineHeight: "1.2",
});

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

export const cardBody = css({
    display: "flex",
    flexDirection: "column",
    gap: "18px",
});
export const priceListButton = css({
    alignSelf: "flex-start",
    marginTop: "auto",
});
