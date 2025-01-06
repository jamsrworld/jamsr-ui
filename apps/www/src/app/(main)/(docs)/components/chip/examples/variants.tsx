/* eslint-disable react/no-unstable-nested-components */

"use client";

import { Chip, UIStylesProvider, type ChipProps } from "@jamsr-ui/react";

export const ChipVariants = () => {
  const variants = [
    "solid",
    "outlined",
    "flat",
  ] satisfies ChipProps["variant"][];

  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Chip color="primary" variant={variant} key={variant}>
          {variant}
        </Chip>
      ))}
      <UIStylesProvider
        chip={{
          classNames: ({ variant }) => ({
            ...(variant === "dot" && {
              base: "",
            }),
            content: "bg-red-100",
          }),
          className: ({ variant }) =>
            variant === "dot" ? "bg-red-100" : undefined,
          size: ({ variant }) => (variant === "dot" ? "lg" : undefined),
          children: <div className="dot size-2 rounded-full bg-warning" />,
        }}
      >
        <Chip variant="dot">Hii</Chip>
      </UIStylesProvider>
    </div>
  );
};
