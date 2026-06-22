"use client";

import { addDays } from "date-fns";
import { Calendar } from "ui/calendar";

export const CalendarDateRestrictions = () => {
  const today = new Date();
  return (
    <Calendar
      mode="single"
      disabled={[
        { before: today },
        { after: addDays(today, 30) },
        { dayOfWeek: [0, 6] },
      ]}
      footer="Weekends and past dates are disabled. Only next 30 days available."
    />
  );
};
