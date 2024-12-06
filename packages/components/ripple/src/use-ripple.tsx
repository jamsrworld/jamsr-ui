import { useDebounce } from "@jamsr-ui/hooks";
import type React from "react";
import { useEffect, useState } from "react";

export type UseRippleOptions = {
  isCenter?: boolean;
};

export const useRipple = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseRippleOptions = {},
) => {
  const [ripples, setRipples] = useState<
    (React.CSSProperties & { id: string })[]
  >([]);
  const { isCenter } = options;
  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;
      const id = Math.random().toString(36).slice(2, 9);
      const clickHandler = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const height = elem.clientHeight;
        const width = elem.clientWidth;
        const diameter = Math.max(width, height);

        const left = isCenter
          ? rect.width / 2 - diameter / 2
          : e.clientX - rect.left - diameter / 2;
        const top = isCenter
          ? rect.height / 2 - diameter / 2
          : e.clientY - rect.top - diameter / 2;

        setRipples([
          ...ripples,
          {
            id,
            top,
            left,
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
  }, [isCenter, ref, ripples]);

  const debounced = useDebounce(ripples, 500);
  useEffect(() => {
    if (debounced.length) {
      setRipples([]);
    }
  }, [debounced.length]);
  return ripples;
};
