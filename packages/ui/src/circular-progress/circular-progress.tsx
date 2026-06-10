"use client";

import { createContext, use, useMemo } from "react";

import { circularProgressStyles } from "./styles";

import type { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "tailwind-variants";

type CircularProgressVariants = VariantProps<typeof circularProgressStyles>;

interface CircularProgressContextValue {
  styles: ReturnType<typeof circularProgressStyles>;
  size: number;
  trackWidth: number;
  progressWidth: number;
  radius: number;
  circumference: number;
  progressOffset: number;
  startAngle: number;
}

const CircularProgressContext =
  createContext<CircularProgressContextValue | null>(null);

const useCircularProgressContext = () => {
  const ctx = use(CircularProgressContext);
  if (!ctx) {
    throw new Error(
      "useCircularProgressContext must be used within a CircularProgress",
    );
  }
  return ctx;
};

export const CircularProgress = (props: CircularProgress.Props) => {
  const {
    isIntermediate,
    color,
    className,
    value = 20,
    size = 24,
    strokeWidth = 2,
    progressWidth = strokeWidth,
    trackWidth = strokeWidth,
    startAngle = -90,
    children = (
      <>
        <CircularProgressTrack />
        <CircularProgressProgress />
      </>
    ),
    ...restProps
  } = props;

  const styles = circularProgressStyles({ isIntermediate, color });

  const radius = (size - Math.max(trackWidth, progressWidth)) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;

  const contextValue = useMemo(
    () => ({
      styles,
      size,
      trackWidth,
      progressWidth,
      radius,
      circumference,
      progressOffset,
      startAngle,
    }),
    [
      styles,
      size,
      trackWidth,
      progressWidth,
      radius,
      circumference,
      progressOffset,
      startAngle,
    ],
  );

  return (
    <CircularProgressContext value={contextValue}>
      <svg
        className={styles.root({ className })}
        data-component="circular-progress"
        data-slot="root"
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        {...restProps}
      >
        {children}
      </svg>
    </CircularProgressContext>
  );
};

export namespace CircularProgress {
  export interface Props
    extends
      Omit<React.SVGProps<SVGSVGElement>, "color">,
      CircularProgressVariants {
    value?: number;
    size?: number;
    trackWidth?: number;
    progressWidth?: number;
    strokeWidth?: number;
    startAngle?: number;
  }
}

export const CircularProgressTrack = (props: CircularProgressTrack.Props) => {
  const { styles, size, radius, trackWidth } = useCircularProgressContext();
  const { className, ...rest } = props;
  return (
    <circle
      className={styles.track({ className })}
      cx={size / 2}
      cy={size / 2}
      data-slot="track"
      fill="none"
      r={radius}
      stroke="currentColor"
      strokeWidth={trackWidth}
      {...rest}
    />
  );
};

export namespace CircularProgressTrack {
  export interface Props extends useRender.ComponentProps<"circle"> {}
}

export const CircularProgressProgress = (
  props: CircularProgressProgress.Props,
) => {
  const {
    styles,
    size,
    radius,
    progressWidth,
    circumference,
    progressOffset,
    startAngle,
  } = useCircularProgressContext();
  const { className, ...rest } = props;
  return (
    <circle
      className={styles.progress({ className })}
      cx={size / 2}
      cy={size / 2}
      data-slot="progress"
      fill="none"
      r={radius}
      stroke="currentColor"
      strokeDasharray={circumference}
      strokeDashoffset={progressOffset}
      strokeLinecap="round"
      strokeWidth={progressWidth}
      transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}
      {...rest}
    />
  );
};

export namespace CircularProgressProgress {
  export interface Props extends useRender.ComponentProps<"circle"> {}
}

export const CircularProgressLabel = (props: CircularProgressLabel.Props) => {
  const { styles } = useCircularProgressContext();
  const { className, ...rest } = props;
  return (
    <text
      className={styles.label({ className })}
      data-slot="label"
      dy="0.3em"
      textAnchor="middle"
      x="50%"
      y="50%"
      {...rest}
    />
  );
};

export namespace CircularProgressLabel {
  export interface Props extends useRender.ComponentProps<"text"> {}
}
