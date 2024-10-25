import { useEffect, useRef, useState } from "react";

export type UseFocusVisibleOptions = {
  onFocusVisible?: () => void; // Callback when focus is visible (keyboard navigation)
  onBlurVisible?: () => void; // Callback when focus is no longer visible
  isDisabled?: boolean; // Option to disable focus-visible tracking
};

export const useFocusVisible = <T extends HTMLElement>(
  options: UseFocusVisibleOptions = {},
) => {
  const { onFocusVisible, onBlurVisible, isDisabled } = options;
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (isDisabled) return () => {};

    let hadKeyboardEvent = false;
    const node = ref.current;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Tab" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "Home" ||
        event.key === "End" ||
        event.key === "ArrowRight"
      ) {
        hadKeyboardEvent = true;
      }
    };

    const handlePointerDown = () => {
      hadKeyboardEvent = false;
    };

    const handleFocus = () => {
      if (hadKeyboardEvent) {
        setIsFocusVisible(true);
        onFocusVisible?.();
      }
    };

    const handleBlur = () => {
      if (isFocusVisible) {
        setIsFocusVisible(false);
        onBlurVisible?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    if (node) {
      node.addEventListener("focus", handleFocus);
      node.addEventListener("blur", handleBlur);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);

      if (node) {
        node.removeEventListener("focus", handleFocus);
        node.removeEventListener("blur", handleBlur);
      }
    };
  }, [onFocusVisible, onBlurVisible, isDisabled, isFocusVisible]);

  return { ref, isFocusVisible };
};
