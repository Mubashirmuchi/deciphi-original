"use client";
import React, { memo } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="h-fit">
      <InlineWidget
        url="https://calendly.com/mubashirfreston/30min"
        styles={{ height: "700px", minWidth: "320px" }}
      />
    </div>
  );
};

export default memo(CalendlyWidget);
