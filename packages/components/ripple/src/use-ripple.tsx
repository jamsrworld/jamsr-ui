import { useDebounce } from "@jamsr-ui/hooks";
import type React from "react";
import { useEffect, useState } from "react";

export const useRipple = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [ripples, setRipples] = useState<
    (React.CSSProperties & { id: string })[]
  >([]);

  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;

      const id = Math.random().toString(36).slice(2, 9);
      const clickHandler = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const left = e.clientX - rect.left;
        const top = e.clientY - rect.top;
        const height = elem.clientHeight;
        const width = elem.clientWidth;
        const diameter = Math.max(width, height);
        setRipples([
          ...ripples,
          {
            id,
            top: top - diameter / 2,
            left: left - diameter / 2,
            height: Math.max(width, height),
            width: Math.max(width, height),
          },
        ]);
      };

      elem.addEventListener("mousedown", clickHandler);
      return () => {
        elem.removeEventListener("mousedown", clickHandler);
      };
    }
    return () => {};
  }, [ref, ripples]);

  const debounced = useDebounce(ripples, 500);
  useEffect(() => {
    if (debounced.length) {
      setRipples([]);
    }
  }, [debounced.length]);
  return ripples;
};
