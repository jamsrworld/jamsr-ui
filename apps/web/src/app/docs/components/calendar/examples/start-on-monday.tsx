"use client";

import { Calendar } from "ui/calendar";

export const CalendarStartOnMonday = () => {
  return (
    <Calendar
      mode="single"
      weekStartsOn={1}
    />
  );
};
