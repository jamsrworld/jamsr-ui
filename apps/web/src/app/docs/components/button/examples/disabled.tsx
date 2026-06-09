"use client";

import { Button } from "ui/button";

export const ButtonDisabled = (props: Button.Props) => {
  return (
    <Button
      disabled
      {...props}
    >
      Button
    </Button>
  );
};
