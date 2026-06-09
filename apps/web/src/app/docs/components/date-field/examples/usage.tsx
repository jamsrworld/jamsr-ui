"use client";

import { DateField } from "jamsrui/date-field";
import React from "react";

export const DateInputUsage = (
  props: React.ComponentProps<typeof DateField>,
) => {
  return (
    <DateField {...props}>
      <DateField.Input>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField>
  );
};
