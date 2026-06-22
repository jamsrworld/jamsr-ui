"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "ui/button";
import { Popover } from "ui/popover";
import { Calendar } from "ui/calendar";

import type { DateRange } from "@daypicker/react";

export const CalendarDateRangePicker = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <Popover>
      <Popover.Trigger
        render={
          <Button variant="bordered">
            <CalendarIcon className="size-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} -{" "}
                  {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              "Pick a date range"
            )}
          </Button>
        }
      />
      <Popover.Content className="w-auto p-0">
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
        />
      </Popover.Content>
    </Popover>
  );
};
