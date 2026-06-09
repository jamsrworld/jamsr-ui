"use client";

import { Progress } from "jamsrui/progress";
import React from "react";

export const ProgressUsage = (props: React.ComponentProps<typeof Progress>) => {
  const { value = 24, ...rest } = props;
  return (
    <Progress
      value={value}
      {...rest}
    >
      <Progress.Label>Export data</Progress.Label>
      <Progress.Value />
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress>
  );
};
