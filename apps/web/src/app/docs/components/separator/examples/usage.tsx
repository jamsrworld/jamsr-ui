"use client";

import { Separator } from "jamsrui/separator";
import React from "react";

export const SeparatorUsage = (
  props: React.ComponentProps<typeof Separator>,
) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-72">
      <div className="text-sm font-semibold">Jamsr UI</div>
      <div className="text-xs text-foreground-secondary">
        A modern UI library.
      </div>
      <Separator
        className="my-2"
        {...props}
      />
      <div className="flex h-5 items-center gap-4 text-xs">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};
