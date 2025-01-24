/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, UIConfigProvider } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";

export const ChipCustomize = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <UIConfigProvider
        chip={{
          props({ variant, color }) {
            return variant === "dot"
              ? {
                  classNames: {
                    base: cn(
                      "border-2 border-divider",
                      color === "danger" && "border-danger text-danger",
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
        
      </UIConfigProvider>
    </div>
  );
};
