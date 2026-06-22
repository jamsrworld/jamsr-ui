"use client";

import { EmailIcon, InfoIcon } from "@/icons";
import { IconButton } from "ui/icon-button";
import { Tooltip } from "ui/tooltip";
import React from "react";

export const TooltipWithGroup = (props: Record<string, unknown>) => {
  const { showArrow, ...rest } = props;
  const showArrowBool = showArrow === "true";
  return (
    <div className="flex gap-2">
      <Tooltip.Group delay={200}>
        <Tooltip
          showArrow={showArrowBool}
          {...rest}
        >
          <Tooltip.Trigger
            render={
              <IconButton label="Click Me!">
                <InfoIcon
                  width={24}
                  height={24}
                />
              </IconButton>
            }
          />
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
        <Tooltip
          showArrow={showArrowBool}
          {...rest}
        >
          <Tooltip.Trigger
            render={
              <IconButton label="Click Me!">
                <EmailIcon
                  width={24}
                  height={24}
                />
              </IconButton>
            }
          />
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
      </Tooltip.Group>
    </div>
  );
};
