"use client";

import { Toggle } from "jamsrui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import React from "react";

export const ToggleUsage = (props: React.ComponentProps<typeof Toggle>) => {
  return (
    <div className="flex items-center gap-2">
      <Toggle {...props}>
        <Bold className="size-4" />
      </Toggle>
      <Toggle {...props}>
        <Italic className="size-4" />
      </Toggle>
      <Toggle {...props}>
        <Underline className="size-4" />
      </Toggle>
    </div>
  );
};
