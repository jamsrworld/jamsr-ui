"use client";

import { useState } from "react";
import { Calendar } from "ui/calendar";

export const CalendarControlled = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
      <p className="text-sm text-foreground-secondary">
        {selected ? `Selected: ${selected.toLocaleDateString()}` : "No date selected"}
      </p>
    </div>
  );
};
