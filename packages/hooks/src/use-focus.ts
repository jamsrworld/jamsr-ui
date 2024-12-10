import { useEffect, useRef, useState } from "react";

export type UseFocusOptions = {
  onFocusStart?: () => void; // Callback when the element is focused
  onFocusEnd?: () => void; // Callback when the element loses focus
  isDisabled?: boolean; // Option to disable the focus tracking
};

export const useFocus = <T extends HTMLElement>(
  options: UseFocusOptions = {},
) => {
  const { onFocusStart, onFocusEnd, isDisabled } = options;
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isDisabled) return () => {};

    const handleFocus = () => {
      setIsFocused(true);
      onFocusStart?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onFocusEnd?.();
    };

    node.addEventListener("focus", handleFocus);
    node.addEventListener("blur", handleBlur);
    return () => {
      node.removeEventListener("focus", handleFocus);
      node.removeEventListener("blur", handleBlur);
    };
  }, [onFocusStart, onFocusEnd, isDisabled]);

  if (isDisabled) {
    return { ref, isFocused: false };
  }
  return { ref, isFocused };
};
