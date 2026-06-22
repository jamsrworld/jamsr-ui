"use client";

import { useState } from "react";
import { Calendar } from "ui/calendar";

import type { DateRange } from "@daypicker/react";

export const CalendarRange = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
    />
  );
};
