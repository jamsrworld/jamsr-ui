"use client";

import { createContext, use, useMemo } from "react";

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";

import { numberFieldStyles } from "./styles";
import { cn } from "../utils/cn";

import type { NumberFieldVariants } from "./styles";

const NumberFieldContext = createContext<{
  styles: ReturnType<typeof numberFieldStyles>;
} | null>(null);

const useNumberFieldContext = () => {
  const ctx = use(NumberFieldContext);
  if (!ctx) {
    throw new Error("useNumberFieldContext must be used within a NumberField");
  }
  return ctx;
};

export const NumberField = (props: NumberField.Props) => {
  const { className, variant, radius, ...rest } = props;
  const styles = numberFieldStyles({ variant, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <NumberFieldContext value={value}>
      <NumberFieldPrimitive.Root
        {...rest}
        className={styles.root({ className: cn(className) })}
      />
    </NumberFieldContext>
  );
};

export namespace NumberField {
  export interface Props
    extends NumberFieldPrimitive.Root.Props, NumberFieldVariants {}
}

export const NumberFieldGroup = (props: NumberFieldPrimitive.Group.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldPrimitive.Group
      {...rest}
      className={styles.group({ className: cn(className) })}
    />
  );
};

export const NumberFieldInput = (props: NumberFieldPrimitive.Input.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldPrimitive.Input
      {...rest}
      className={styles.input({ className: cn(className) })}
    />
  );
};

export const NumberFieldIncrement = (
  props: NumberFieldPrimitive.Increment.Props,
) => {
  const { styles } = useNumberFieldContext();
  const { className, children = <PlusIcon />, ...rest } = props;
  return (
    <NumberFieldPrimitive.Increment
      {...rest}
      className={styles.increment({ className: cn(className) })}
    >
      {children}
    </NumberFieldPrimitive.Increment>
  );
};

export const NumberFieldDecrement = (
  props: NumberFieldPrimitive.Decrement.Props,
) => {
  const { styles } = useNumberFieldContext();
  const { className, children = <MinusIcon />, ...rest } = props;
  return (
    <NumberFieldPrimitive.Decrement
      {...rest}
      className={styles.decrement({ className: cn(className) })}
    >
      {children}
    </NumberFieldPrimitive.Decrement>
  );
};

export const NumberFieldScrubArea = (
  props: NumberFieldPrimitive.ScrubArea.Props,
) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldPrimitive.ScrubArea
      {...rest}
      className={styles.scrubArea({ className: cn(className) })}
    >
      <label className={styles.label()}>Amount</label>
      <NumberFieldPrimitive.ScrubAreaCursor
        className={styles.scrubAreaCursor()}
      >
        <CursorGrowIcon />
      </NumberFieldPrimitive.ScrubAreaCursor>
    </NumberFieldPrimitive.ScrubArea>
  );
};

const CursorGrowIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 24 14"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />{" "}
    </svg>
  );
};
const PlusIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="none"
      height="10"
      stroke="currentcolor"
      strokeWidth="1.6"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />{" "}
    </svg>
  );
};
const MinusIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="none"
      height="10"
      stroke="currentcolor"
      strokeWidth="1.6"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H10" />{" "}
    </svg>
  );
};
