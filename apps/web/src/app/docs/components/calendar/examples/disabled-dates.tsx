"use client";

import { Calendar } from "ui/calendar";

export const CalendarDisabledDates = () => {
  return (
    <Calendar
      mode="single"
      disabled={{ before: new Date() }}
    />
  );
};
