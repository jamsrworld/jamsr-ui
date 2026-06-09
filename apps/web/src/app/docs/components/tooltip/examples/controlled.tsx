"use client";

import { Button } from "ui/button";
import { Tooltip } from "ui/tooltip";
import React, { useState } from "react";

export const TooltipControlled = (props: Record<string, unknown>) => {
  const { showArrow, ...rest } = props;
  const showArrowBool = showArrow === "true";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center gap-4">
      <Tooltip
        open={isOpen}
        onOpenChange={setIsOpen}
        showArrow={showArrowBool}
        {...rest}
      >
        <Tooltip.Trigger render={<Button>Hover me</Button>} />
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
      {!isOpen ? "Closed" : "Opened"}
    </div>
  );
};
