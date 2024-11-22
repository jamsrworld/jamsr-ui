"use client";

import { usePress } from "@jamsr-ui/hooks";
import { Button } from "@jamsr-ui/react";

export const UsePressUsage = () => {
  const { isPressed, ref } = usePress<HTMLButtonElement>({
    onPressCancel() {
      console.log("onPressCancel");
    },
    onPressEnd() {
      console.log("onPressEnd");
    },
    onPressStart() {
      console.log("onPressStart");
    },
  });
  return (
    <div className="flex flex-col items-start gap-2">
      <Button type="button" ref={ref}>
        Press me!
      </Button>
      State {isPressed ? "true" : "false"}
    </div>
  );
};
