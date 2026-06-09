"use client";

import { TimeField, TimeInput, TimeSegment } from "jamsrui/time-field";
import React from "react";

export const TimeFieldUsage = (
  props: React.ComponentProps<typeof TimeField>,
) => {
  return (
    <TimeField {...props}>
      <TimeInput>{(segment) => <TimeSegment segment={segment} />}</TimeInput>
    </TimeField>
  );
};
