"use client";

import { Chip } from "@jamsr-ui/react";

export const ChipOnDelete = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Chip onDelete={handleClick}>Click me</Chip>;
};
