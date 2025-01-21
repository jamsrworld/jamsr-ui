/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, UIStylesProvider } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";

export const ChipCustomize = () => {
  return (
    <div className="flex flex-wrap gap-4">
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
