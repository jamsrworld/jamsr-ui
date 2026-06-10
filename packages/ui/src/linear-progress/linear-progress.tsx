"use client";

import { createContext, use, useMemo } from "react";

import { useRender } from "@base-ui/react/use-render";
import { motion } from "motion/react";

import { linearProgressStyles } from "./styles";

import type { HTMLMotionProps } from "motion/react";
import type { VariantProps } from "tailwind-variants";

type LinearProgressVariants = VariantProps<typeof linearProgressStyles>;

interface LinearProgressContextProps {
  styles: ReturnType<typeof linearProgressStyles>;
  progress: number;
}

const LinearProgressContext = createContext<LinearProgressContextProps | null>(
  null,
);

const useLinearProgressContext = () => {
  const ctx = use(LinearProgressContext);
  if (!ctx) {
    throw new Error(
      "useLinearProgressContext must be used within a LinearProgress",
    );
  }
  return ctx;
};

export const LinearProgress = (props: LinearProgress.Props) => {
  const {
    color,
    size,
    isIntermediate = true,
    progress: progressProp = isIntermediate ? 50 : 0,
    className,
    children = <LinearProgressBar />,
    render,
    ...restProps
  } = props;
  const progress = Math.min(progressProp, 100);
  const styles = linearProgressStyles({ color, size, isIntermediate });
  const value = useMemo(() => ({ styles, progress }), [styles, progress]);

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      "data-slot": "root",
      className: styles.track({ className }),
      children,
    },
    render,
  });

  return (
    <LinearProgressContext value={value}>{renderElement}</LinearProgressContext>
  );
};

export namespace LinearProgress {
  export interface Props
    extends
      Omit<useRender.ComponentProps<"div">, "color" | "size">,
      LinearProgressVariants {
    progress?: number;
    isIntermediate?: boolean;
  }
}

export const LinearProgressBar = (props: LinearProgressBar.Props) => {
  const { styles, progress } = useLinearProgressContext();
  const { className, ...rest } = props;
  return (
    <motion.div
      animate={{ width: `${progress}%` }}
      className={styles.bar({ className })}
      data-slot="bar"
      initial={{ width: 0 }}
      {...rest}
    />
  );
};

export namespace LinearProgressBar {
  export interface Props extends HTMLMotionProps<"div"> {}
}
