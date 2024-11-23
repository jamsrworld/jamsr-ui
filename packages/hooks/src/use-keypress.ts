import { useEffect, useRef } from "react";

export const useKeyPress = <T extends HTMLElement>(
  keys: null | string | string[],
  callback: (event: KeyboardEvent) => void,
  options: {
    isDisabled?: boolean;
    isWindow?: boolean;
  } = {},
) => {
  const ref = useRef<T>(null);
  const { isDisabled = false } = options;

  useEffect(() => {
    const node = (options.isWindow ? window : ref.current) as HTMLElement;
    if (!node || isDisabled) return () => {};

    const handleKeyPress = (event: KeyboardEvent) => {
      const keyList = (keys === null && "all") ||
        (Array.isArray(keys) && keys) || [keys];
      if (keyList === "all" || keyList.includes(event.key)) {
        callback(event);
      }
    };

    node.addEventListener("keydown", handleKeyPress);
    return () => {
      node.removeEventListener("keydown", handleKeyPress);
    };
  }, [keys, callback, isDisabled, options.isWindow]);

  return { ref };
};
