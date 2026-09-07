"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <div className="calendly-wrapper">
      <InlineWidget
        url="https://calendly.com/aliothdigital/30min"
        styles={{
          height: "700px",
          minWidth: "320px",
          width: "100%",
        }}
      />
    </div>
  );
}
