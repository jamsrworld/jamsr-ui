"use client";

import { Toggle, ToggleGroup } from "jamsrui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import React from "react";

export const ToggleGroupUsage = (props: any) => {
  const { multiple, ...rest } = props;
  const multipleBool = multiple === "true";
  return (
    <ToggleGroup
      multiple={multipleBool}
      {...rest}
    >
      <Toggle>
        <Bold className="size-4" />
      </Toggle>
      <Toggle>
        <Italic className="size-4" />
      </Toggle>
      <Toggle>
        <Underline className="size-4" />
      </Toggle>
    </ToggleGroup>
  );
};
