"use client";

import { Ripple } from "jamsrui/ripple";
import React from "react";

export const RippleUsage = (props: Record<string, unknown>) => {
  const isCentered = props.isCentered === "true";
  return (
    <div className="relative flex h-48 w-72 select-none items-center justify-center rounded-xl border-2 border-dashed border-default-400 bg-content2 text-default-600 cursor-pointer overflow-hidden">
      <Ripple isCentered={isCentered} />
      Click anywhere in this box
    </div>
  );
};
