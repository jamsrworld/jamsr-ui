import { useEffect } from "react";

export const useKeyPress = (
  keys: null | string | string[],
  callback: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyList = (keys === null && "all") ||
        (Array.isArray(keys) && keys) || [keys];
      if (keyList === "all" || keyList.includes(event.key)) {
        callback(event);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keys, callback]);
};
