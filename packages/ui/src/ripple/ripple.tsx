"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import type { FC, MouseEvent, TouchEvent } from "react";

const RippleInner: FC<RippleProps> = ({ x, y, size, duration }) => {
  return (
    <span
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "scale(0)",
        animation: `ripple-animation ${duration}ms linear`,
        pointerEvents: "none",
      }}
    />
  );
};

interface RippleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
}

export const useRipple = (props: useRipple.Props) => {
  const { isCentered, isDisabled } = props;
  const [ripples, setRipples] = useState<useRipple.RippleData[]>([]);
  const rippleId = useRef(0);

  const addRipple = useCallback((x: number, y: number, size: number) => {
    const id = ++rippleId.current;
    setRipples((prev) => [
      ...prev,
      {
        id,
        size,
        x,
        y,
      },
    ]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  }, []);

  const handleRipple = useCallback(
    (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if (event?.type === "mousedown") {
        clientX = (event as MouseEvent<HTMLDivElement>).clientX;
        clientY = (event as MouseEvent<HTMLDivElement>).clientY;
      } else if (event?.type === "touchstart") {
        const touch = (event as TouchEvent<HTMLDivElement>).touches[0];
        if (touch) {
          clientX = touch.clientX;
          clientY = touch.clientY;
        }
      } else {
        return;
      }

      let clickX: number, clickY: number;
      if (isCentered) {
        clickX = rect.width / 2;
        clickY = rect.height / 2;
      } else {
        clickX = clientX - rect.left;
        clickY = clientY - rect.top;
      }

      const distances = [
        Math.sqrt(clickX ** 2 + clickY ** 2),
        Math.sqrt((rect.width - clickX) ** 2 + clickY ** 2),
        Math.sqrt(clickX ** 2 + (rect.height - clickY) ** 2),
        Math.sqrt((rect.width - clickX) ** 2 + (rect.height - clickY) ** 2),
      ];
      const maxDistance = Math.max(...distances);
      const size = 2 * maxDistance;
      const x = clickX - maxDistance;
      const y = clickY - maxDistance;

      addRipple(x, y, size);
    },
    [addRipple, isCentered],
  );

  return useMemo(
    () => ({
      ripples,
      handleRipple,
      isDisabled,
    }),
    [handleRipple, isDisabled, ripples],
  );
};

export namespace useRipple {
  export interface RippleData {
    x: number;
    y: number;
    size: number;
    id: number;
  }

  export interface Props {
    isCentered?: boolean;
    isDisabled?: boolean;
  }
}

export const Ripple = (props: Ripple.Props) => {
  const { ripples, handleRipple, isDisabled } = useRipple(props);
  const duration = 600;
  if (isDisabled) return null;
  return (
    <div
      className="size-full inset-0 z-1 overflow-hidden absolute"
      onClick={handleRipple}
      onMouseDown={handleRipple}
      onTouchStart={handleRipple}
    >
      {ripples.map((ripple) => (
        <RippleInner
          key={ripple.id}
          duration={duration}
          size={ripple.size}
          x={ripple.x}
          y={ripple.y}
        />
      ))}
    </div>
  );
};

export namespace Ripple {
  export interface Props extends useRipple.Props {}
  export type Variants = {
    isCentered?: boolean;
  };
}
