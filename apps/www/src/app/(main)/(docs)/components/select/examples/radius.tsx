"use client";

import { type SelectProps } from "@jamsr-ui/react";
import { SelectUsage } from "./usage";

export const SelectRadius = () => {
  const radii: SelectProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="min-h-[80px]">
      {radii.map((radius) => (
        <SelectUsage radius={radius} key={radius} />
      ))}
    </div>
  );
};
