"use client";

import { createContext, use, useMemo } from "react";

import { useRender } from "@base-ui/react/use-render";

import { chipStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type ChipVariants = VariantProps<typeof chipStyles>;

const ChipContext = createContext<{
  styles: ReturnType<typeof chipStyles>;
} | null>(null);

const useChipContext = () => {
  const ctx = use(ChipContext);
  if (!ctx) {
    throw new Error("useChipContext must be used within a ChipContext");
  }
  return ctx;
};

export const Chip = (props: Chip.Props) => {
  const {
    variant,
    size,
    color,
    isSquare,
    isBordered,
    radius,
    className,
    render,
    ...restProps
  } = props;
  const styles = chipStyles({
    variant,
    size,
    color,
    isSquare,
    isBordered,
    radius,
  });
  const value = useMemo(() => ({ styles }), [styles]);

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      "data-slot": "root",
      "data-component": "chip",
      className: styles.root({ className }),
    },
    render,
  });

  return <ChipContext value={value}>{renderElement}</ChipContext>;
};

export namespace Chip {
  export interface Props
    extends
      Omit<useRender.ComponentProps<"div">, "color" | "size">,
      ChipVariants {}
}

export const ChipDot = (props: ChipDot.Props) => {
  const { styles } = useChipContext();
  const { className, render, ...restProps } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      "data-slot": "dot",
      className: styles.dot({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace ChipDot {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
