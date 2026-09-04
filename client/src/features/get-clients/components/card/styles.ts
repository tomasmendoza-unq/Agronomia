import { css } from "@styled-system/css";

export const card = css({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    width: "100%",
    maxWidth: "496px",
    minHeight: "218px",
    padding: "18px",
    border: "1px solid #CECECE",
    borderRadius: "13px",
    backgroundColor: "surfaceCardColor",
    color: "#333333",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.02)",
});

export const clientName = css({
    margin: 0,
    overflow: "hidden",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.2",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

export const header = css({
    display: "flex",
    alignItems: "center",
    gap: "13px",
});

export const cardBody = css({
    display: "flex",
    flexDirection: "column",
    gap: "18px",
});

export const label = css({
    color: "textSubtle",
    fontSize: "12px",
    fontWeight: "medium",
    lineHeight: "1.2",
});

export const cuitRow = css({
    display: "flex",
    alignItems: "baseline",
    gap: "5px",
    paddingLeft: "45px",
});

export const contactHeader = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "13px",
});

export const headerInfo = css({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    minWidth: 0,
});

export const inlineField = css({
    display: "flex",
    alignItems: "baseline",
    gap: "5px",
});

export const inlineLabel = css({
    color: "textSubtle",
    fontSize: "12px",
    fontWeight: "medium",
    lineHeight: "1.2",
    whiteSpace: "nowrap",
});

export const inlineValue = css({
    color: "#333333",
    fontSize: "13px",
    fontWeight: "medium",
    lineHeight: "1.2",
});
