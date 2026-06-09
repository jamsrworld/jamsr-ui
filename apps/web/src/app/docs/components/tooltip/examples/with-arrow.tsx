"use client";

import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Tooltip } from "jamsrui/tooltip";
import React from "react";

export const TooltipWithArrow = (props: Record<string, unknown>) => {
  const { showArrow, ...rest } = props;
  const showArrowBool = showArrow === "true";
  return (
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
      <Tooltip.Content>
        <Tooltip.Arrow />I am tooltip
      </Tooltip.Content>
    </Tooltip>
  );
};
