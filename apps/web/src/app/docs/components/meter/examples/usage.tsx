"use client";

import { Meter } from "jamsrui/meter";
import React from "react";

export const MeterUsage = (props: React.ComponentProps<typeof Meter>) => {
  const { value = 24, ...rest } = props;
  return (
    <Meter
      value={value}
      {...rest}
    >
      <Meter.Label>Label</Meter.Label>
      <Meter.Value />
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  );
};
