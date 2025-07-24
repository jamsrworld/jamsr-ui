import type React from "react";
import { useEffect, useState } from "react";

export type UseRippleOptions = {
  isCenter?: boolean;
};

type Ripple = React.CSSProperties & { id: string };

export const useRipple = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseRippleOptions = {},
) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const { isCenter } = options;

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    const clickHandler = (e: MouseEvent) => {
      const rect = elem.getBoundingClientRect();
      const diameter = Math.max(elem.clientWidth, elem.clientHeight);

      const left = isCenter
        ? rect.width / 2 - diameter / 2
        : e.clientX - rect.left - diameter / 2;
      const top = isCenter
        ? rect.height / 2 - diameter / 2
        : e.clientY - rect.top - diameter / 2;

      const id = Math.random().toString(36).slice(2, 9);
      const newRipple: Ripple = {
        id,
        top,
        left,
        width: diameter,
        height: diameter,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Schedule removal of this ripple after 500ms
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 500);
    };

    elem.addEventListener("mousedown", clickHandler);
    return () => {
      elem.removeEventListener("mousedown", clickHandler);
    };
  }, [isCenter, ref]);

  return ripples;
};
