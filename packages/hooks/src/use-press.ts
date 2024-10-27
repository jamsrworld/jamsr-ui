/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useRef, useState } from "react";

export type UsePressOptions = {
  onPressStart?: () => void; // Callback when pressing starts
  onPressEnd?: () => void; // Callback when pressing ends successfully
  onPressCancel?: () => void; // Callback if press is canceled
  isDisabled?: boolean;
};

export const usePress = <T extends HTMLElement>(
  options: UsePressOptions = {},
) => {
  const { onPressStart, onPressEnd, onPressCancel, isDisabled } = options;
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || isDisabled) return () => {};

    const onPointerDown = () => {
      setIsPressed(true);
      onPressStart?.();

      // Set up the pointer move and pointer up listeners
      const onPointerMove = (moveEvent: PointerEvent) => {
        if (node.contains(moveEvent.target as Node)) {
          setIsPressed(true);
          return;
        }
        setIsPressed(false);
        onPressCancel?.();
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        if (node && node.contains(upEvent.target as Node)) {
          onPressEnd?.();
        }
        setIsPressed(false); // Reset the press state
        cleanupListeners();
      };

      const cleanupListeners = () => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
      };
      // Attach the listeners to the document to track movement outside the element
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    };
    node.addEventListener("pointerdown", onPointerDown);
    return () => {
      node.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onPressStart, onPressEnd, onPressCancel, isDisabled]);

  return { ref, isPressed };
};
