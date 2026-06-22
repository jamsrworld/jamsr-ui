"use client";

import { Calendar } from "ui/calendar";

export const CalendarFixedWeeks = () => {
  return (
    <Calendar
      mode="single"
      fixedWeeks
      showOutsideDays
    />
  );
};
