"use client";

import React from "react";

export const DatePickerUsage = (props: React.ComponentProps<"div">) => {
  return (
    <div
      className="flex flex-col gap-4"
      {...props}
    >
      Usage
      <input type="time" />
      <input type="date" />
      <input type="datetime-local" />
    </div>
  );
};
