"use client";

import { createContext, use, useMemo } from "react";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { radioGroupStyles, radioStyles } from "./styles";
import { cn } from "../utils/cn";

import type { RadioGroupVariants, RadioVariants } from "./styles";

const RadioStyleContext = createContext<{
  styles: ReturnType<typeof radioStyles>;
} | null>(null);

const useRadioStyleContext = () => {
  const ctx = use(RadioStyleContext);
  if (!ctx) {
    throw new Error("useRadioContext must be used within a Radio");
  }
  return ctx;
};

const RadioGroupContext = createContext<RadioVariants | null>(null);

const useRadioGroupContext = () => {
  const ctx = use(RadioGroupContext);
  if (!ctx) {
    throw new Error("useRadioContext must be used within a Radio");
  }
  return ctx;
};

export const RadioGroup = (props: RadioGroup.Props) => {
  const { color, size, className, ...restProps } = props;
  const styles = radioGroupStyles({ className: cn(className) });
  const value: RadioVariants = useMemo(() => ({ color, size }), [color, size]);
  return (
    <RadioGroupContext value={value}>
      <RadioGroupPrimitive {...restProps} className={styles} />
    </RadioGroupContext>
  );
};

export namespace RadioGroup {
  export interface Props
    extends RadioGroupPrimitive.Props, RadioVariants, RadioGroupVariants {}
}

export const Radio = (props: Radio.Props) => {
  const group = useRadioGroupContext();
  const {
    color = group.color,
    size = group.size,
    className,
    children = <RadioIndicator />,
    ...restProps
  } = props;
  const styles = radioStyles({
    color,
    size,
  });

  const value = useMemo(
    () => ({
      styles,
    }),
    [styles],
  );
  return (
    <RadioStyleContext value={value}>
      <RadioPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
      >
        {children}
      </RadioPrimitive.Root>
    </RadioStyleContext>
  );
};

export namespace Radio {
  export interface Props extends RadioPrimitive.Root.Props, RadioVariants {}
}

export const RadioIndicator = (props: RadioPrimitive.Indicator.Props) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioPrimitive.Indicator
      {...props}
      className={styles.indicator({ className: cn(props.className) })}
    />
  );
};
