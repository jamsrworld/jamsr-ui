"use client";

import { useHover } from "@jamsr-ui/hooks";
import { Button } from "@jamsr-ui/react";

export const UseHoverDelay = () => {
  const { isHovered, ref } = useHover<HTMLButtonElement>({
    enterDelay: 500,
    exitDelay: 500,
  });
  return (
    <div className="flex flex-col items-start gap-2">
      <Button type="button" ref={ref}>
        Hover over me!
      </Button>
      State {isHovered ? "true" : "false"}
    </div>
  );
};
