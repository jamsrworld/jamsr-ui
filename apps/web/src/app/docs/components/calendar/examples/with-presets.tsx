"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "ui/button";
import { Popover } from "ui/popover";
import { Calendar } from "ui/calendar";

export const CalendarWithPresets = () => {
  const [date, setDate] = useState<Date | undefined>();

  const presets = [
    { label: "Today", date: new Date() },
    { label: "Tomorrow", date: addDays(new Date(), 1) },
    { label: "In 3 days", date: addDays(new Date(), 3) },
    { label: "In a week", date: addDays(new Date(), 7) },
    { label: "In a month", date: addDays(new Date(), 30) },
  ];

  return (
    <Popover>
      <Popover.Trigger
        render={
          <Button variant="bordered">
            <CalendarIcon className="size-4" />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        }
      />
      <Popover.Content className="flex w-auto p-0">
        <div className="flex flex-col gap-1 border-r border-border p-3">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => setDate(preset.date)}
              className="rounded-md px-3 py-1.5 text-sm text-left hover:bg-default-soft transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </Popover.Content>
    </Popover>
  );
};
