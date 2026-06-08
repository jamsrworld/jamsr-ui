"use client";

import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";
import { useState } from "react";

export const TooltipControlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center gap-4">
      <Tooltip
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Tooltip.Trigger render={<Button>Hover me</Button>} />
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
      {!isOpen ? "Closed" : "Opened"}
    </div>
  );
};
