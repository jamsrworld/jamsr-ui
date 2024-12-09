"use client";

import { Checkbox, type CheckboxProps } from "@jamsr-ui/react";

export const CheckboxRadius = () => {
  const radii: CheckboxProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <Checkbox
          key={radius}
          radius={radius}
          label={`${radius}: I am a checkbox`}
        />
      ))}
    </div>
  );
};
