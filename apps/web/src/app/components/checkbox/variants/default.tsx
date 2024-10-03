"use client";

import { Checkbox } from "@jamsr-ui/react";

export const CheckboxDefault = () => {
  const onCheckedChange = () => {};
  return (
    <Checkbox
      label="I am a checkbox"
      onCheckedChange={onCheckedChange}
    />
  );
};
