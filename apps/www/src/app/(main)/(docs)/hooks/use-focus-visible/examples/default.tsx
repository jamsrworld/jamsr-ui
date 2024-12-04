"use client";

import { useFocusVisible } from "@jamsr-ui/hooks";
import { Button } from "@jamsr-ui/react";

export const UseFocusVisibleUsage = () => {
  const { isFocusVisible, ref } = useFocusVisible<HTMLButtonElement>();
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="flex flex-col items-start gap-2">
      <Button type="button" onClick={handleClick} ref={ref}>
        Focus me! with keyboard
      </Button>
      State {isFocusVisible ? "true" : "false"}
    </div>
  );
};
