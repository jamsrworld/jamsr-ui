"use client";

import { TimeField, TimeInput, TimeSegment } from "ui/time-field";
import React from "react";

export const TimeFieldUsage = (props: TimeField.Props) => {
  return (
    <TimeField {...props}>
      <TimeInput>{(segment) => <TimeSegment segment={segment} />}</TimeInput>
    </TimeField>
  );
};
