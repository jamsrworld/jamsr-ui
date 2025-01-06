/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, UIStylesProvider, type ChipProps } from "@jamsr-ui/react";

export const ChipVariants = () => {
  const variants: ChipProps["variant"][] = ["solid", "outlined", "flat"];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Chip color="primary" variant={variant} key={variant}>
          {variant}
        </Chip>
      ))}
      <UIStylesProvider
        chip={{
          props: ({ variant }) => {
            console.log("variant:->", variant);
            return variant === "dot"
              ? {
                  className: "bg-blue-500",
                  children: (
                    <div className="dot size-2 rounded-full bg-warning" />
                  ),
                }
              : {};
          },
          classNames: {
            content: "bg-red-500",
          },
        }}
      >
        <Chip variant="dot">Hii</Chip>
        <Chip classNames={{ base: "bg-cyan-500" }} variant="dot">
          Hii
        </Chip>
        <Chip classNames={{ base: "bg-primary-50" }}>Hii2</Chip>
      </UIStylesProvider>
    </div>
  );
};
