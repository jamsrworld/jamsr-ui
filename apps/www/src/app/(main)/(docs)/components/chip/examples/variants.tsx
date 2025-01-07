/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, UIStylesProvider, type ChipProps } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";

export const ChipVariants = () => {
  const variants: ChipProps["variant"][] = ["solid", "outlined", "flat", "dot"];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Chip color="primary" variant={variant} key={variant}>
          {variant}
        </Chip>
      ))}

      <UIStylesProvider
        chip={{
          props({ variant, color }) {
            return variant === "dot"
              ? {
                  classNames: {
                    base: cn(
                      "border-2 border-divider",
                      color === "danger" && "border-danger",
                    ),
                  },
                }
              : {};
          },
        }}
      >
        <Chip variant="dot">Hello</Chip>
        <Chip variant="dot" color="danger">
          Hello
        </Chip>
      </UIStylesProvider>
    </div>
  );
};
