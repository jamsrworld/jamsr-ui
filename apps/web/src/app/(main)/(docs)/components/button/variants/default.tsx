"use client";

import { Button } from "@jamsr-ui/react";

export const ButtonDefault = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Button variant="solid" onClick={handleClick} color="default">
      Button
    </Button>
  );
};
