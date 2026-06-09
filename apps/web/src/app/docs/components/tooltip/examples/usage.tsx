"use client";

import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";
import React from "react";

export const TooltipUsage = (props: Record<string, unknown>) => {
  const { showArrow, ...rest } = props;
  const showArrowBool = showArrow === "true";
  return (
    <Tooltip
      showArrow={showArrowBool}
      {...rest}
    >
      <Tooltip.Trigger render={<Button>Hover me</Button>} />
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
};
