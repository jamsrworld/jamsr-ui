import { useEffect, useRef, useState } from "react";

export type UseHoverOptions = {
  enterDelay?: number; // delay in milliseconds marking as hovered
  exitDelay?: number; // delay in milliseconds unmarking as hovered
  isDisabled?: boolean;
};

export const useHover = <T extends HTMLElement>(options?: UseHoverOptions) => {
  const { enterDelay = 0, exitDelay = 0, isDisabled } = options ?? {};
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isDisabled) {
      setIsHovered(false);
      return () => {};
    }

    let enterTimeout: NodeJS.Timeout | null = null;
    let exitTimeout: NodeJS.Timeout | null = null;

    const onMouseEnter = () => {
      if (exitTimeout) clearTimeout(exitTimeout);
      enterTimeout = setTimeout(() => {
        setIsHovered(true);
      }, enterDelay);
    };

    const onMouseLeave = () => {
      if (enterTimeout) clearTimeout(enterTimeout);
      exitTimeout = setTimeout(() => {
        setIsHovered(false);
      }, exitDelay);
    };

    node.addEventListener("mouseenter", onMouseEnter);
    node.addEventListener("mouseleave", onMouseLeave);
    return () => {
      if (enterTimeout) clearTimeout(enterTimeout);
      if (exitTimeout) clearTimeout(exitTimeout);
      node.removeEventListener("mouseenter", onMouseEnter);
      node.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [enterDelay, exitDelay, isDisabled]);

  if (isDisabled) {
    return { ref, isHovered: false };
  }
  return { ref, isHovered };
};
