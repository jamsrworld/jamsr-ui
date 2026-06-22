"use client";

import { Input } from "ui/input";

export const InputUsage = (props: Input.Props) => {
  return (
    <Input
      {...props}
      placeholder="Enter your name"
    />
  );
};
