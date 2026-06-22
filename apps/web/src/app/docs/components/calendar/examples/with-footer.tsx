"use client";

import { useState } from "react";
import { Calendar } from "ui/calendar";

export const CalendarWithFooter = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Pick a day."
      }
    />
  );
};
