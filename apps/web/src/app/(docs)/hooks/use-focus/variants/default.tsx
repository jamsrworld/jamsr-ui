"use client";

import { useFocus } from "@jamsr-ui/hooks";
import { Button } from "@jamsr-ui/react";

export const UseFocusDefault = () => {
  const { isFocused, ref } = useFocus<HTMLButtonElement>();
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className="flex flex-col items-start gap-2">
      <Button type="button" onClick={handleClick} ref={ref}>
        Focus me!
      </Button>
      State {isFocused ? "true" : "false"}
    </div>
  );
};
