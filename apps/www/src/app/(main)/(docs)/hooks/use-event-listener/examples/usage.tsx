"use client";

import { useEventListener } from "@jamsr-ui/hooks";
import { useRef, useState } from "react";

export const UseEventListenerUsage = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isPointDown, setIsPointDown] = useState(false);
  const handlePointerDown = (e: PointerEvent) => {
    console.log("e:->", e);
    setIsPointDown(true);
  };
  const handlePointerUp = (e: PointerEvent) => {
    console.log("e:->", e);
    setIsPointDown(false);
  };
  useEventListener(ref, "pointerdown", handlePointerDown);
  useEventListener(ref, "pointerup", handlePointerUp);
  return (
    <div ref={setRef} className="flex flex-col items-start gap-2 bg-red-500">
      <div>Use Event listener. Start pressing </div>
      <div>You pressed {isPointDown ? "true" : "false"}</div>
    </div>
  );
};
