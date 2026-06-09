"use client";

import { DateField } from "ui/date-field";
import React from "react";

export const DateInputUsage = (props: DateField.Props) => {
  return (
    <DateField {...props}>
      <DateField.Input>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField>
  );
};
