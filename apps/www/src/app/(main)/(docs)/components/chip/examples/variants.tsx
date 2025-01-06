/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, type ChipProps } from "@jamsr-ui/react";

export const ChipVariants = () => {
  const variants: ChipProps["variant"][] = ["solid", "outlined", "flat", "dot"];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Chip color="primary" variant={variant} key={variant}>
          {variant}
        </Chip>
      ))}
    </div>
  );
};
