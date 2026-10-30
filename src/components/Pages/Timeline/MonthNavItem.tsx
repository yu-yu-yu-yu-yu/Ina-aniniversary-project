import React from "react";
import { Month, Year } from "../../../types/timeline";
import { PageArrowButton } from "./styles";

export const MonthNavItem = ({
  entry,
  direction,
  onNavigate,
  mobile,
}: {
  entry: { year: Year; month: Month };
  direction: "prev" | "next";
  onNavigate: (month: Month, year: Year) => void;
  mobile: boolean;
}) => {
  const isPrev = direction === "prev";
  const icon = mobile
    ? isPrev
      ? "fa fa-chevron-up"
      : "fa fa-chevron-down"
    : isPrev
      ? "fa fa-chevron-left"
      : "fa fa-chevron-right";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: mobile ? "16px 0" : "0 40px",
        gap: 8,
        ...(mobile ? { width: "100%" } : {}),
      }}
    >
      <PageArrowButton
        onClick={() => onNavigate(entry.month, entry.year as Year)}
      >
        <i className={icon} aria-hidden="true" />
      </PageArrowButton>
      <span
        style={{
          color: "var(--light-highlight)",
          fontSize: "0.85em",
          textAlign: "center",
          lineHeight: 1.3,
          whiteSpace: "nowrap",
        }}
      >
        {entry.month}
        <br />
        {entry.year}
      </span>
    </div>
  );
};
