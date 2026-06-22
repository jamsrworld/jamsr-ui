"use client";

import { useState } from "react";
import { Calendar } from "ui/calendar";

export const CalendarRequired = () => {
  const [selected, setSelected] = useState<Date>(new Date());
  return (
    <Calendar
      mode="single"
      required
      selected={selected}
      onSelect={setSelected}
      footer={`Selected: ${selected.toLocaleDateString()}`}
    />
  );
};
