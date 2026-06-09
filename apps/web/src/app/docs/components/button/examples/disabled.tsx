"use client";

import { Button } from "jamsrui/button";

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
