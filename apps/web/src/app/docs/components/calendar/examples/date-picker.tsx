"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "ui/button";
import { Popover } from "ui/popover";
import { Calendar } from "ui/calendar";

export const CalendarDatePicker = () => {
  const [date, setDate] = useState<Date | undefined>();
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
      <Popover.Content className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </Popover.Content>
    </Popover>
  );
};
