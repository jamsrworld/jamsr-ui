"use client";

import { Progress } from "ui/progress";
import React from "react";

export const ProgressUsage = (props: Progress.Props) => {
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
