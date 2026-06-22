"use client";

import { useState } from "react";
import { Calendar } from "ui/calendar";

export const CalendarMultiple = () => {
  const [selected, setSelected] = useState<Date[] | undefined>();
  return (
    <Calendar
      mode="multiple"
      selected={selected}
      onSelect={setSelected}
    />
  );
};
