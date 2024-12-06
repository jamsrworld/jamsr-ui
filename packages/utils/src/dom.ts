import { useImperativeHandle, useRef } from "react";

export const useDOMRef = <T extends HTMLElement = HTMLElement>(
  ref?: React.Ref<T | null>,
) => {
  const domRef = useRef<T>(null);
  useImperativeHandle(ref, () => domRef.current!);
  return domRef;
};
