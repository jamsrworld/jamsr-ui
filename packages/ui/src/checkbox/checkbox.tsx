"use client";

import { createContext, use, useMemo } from "react";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { mergeProps } from "react-aria/mergeProps";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";

import { checkboxStyles } from "./styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type CheckboxVariants = VariantProps<typeof checkboxStyles>;

const CheckboxContext = createContext<{
  styles: ReturnType<typeof checkboxStyles>;
} | null>(null);

const useCheckboxContext = () => {
  const ctx = use(CheckboxContext);
  if (!ctx) {
    throw new Error("useCheckboxContext must be used within a CheckboxContext");
  }
  return ctx;
};

export const Checkbox = (props: Checkbox.Props) => {
  const {
    size,
    radius,
    isInvalid,
    className,
    children = <CheckboxIndicator />,
    variant,
    disabled,
    onClick,
    ...restProps
  } = props;
  const styles = checkboxStyles({ size, radius, variant });
  const value = useMemo(() => ({ styles }), [styles]);

  const isDisabled = disabled;

  const { isPressed, pressProps } = usePress({
    isDisabled,
    onClick(e) {
      onClick?.(e as any);
    },
  });
  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { isFocusVisible, focusProps, isFocused } = useFocusRing({});
  return (
    <CheckboxContext value={value}>
      <CheckboxPrimitive.Root
        data-focus-visible={dataAttr(isFocusVisible)}
        data-focused={dataAttr(isFocused)}
        data-hovered={dataAttr(isHovered)}
        data-pressed={dataAttr(isPressed)}
        disabled={isDisabled}
        {...mergeProps(pressProps, hoverProps, focusProps, restProps)}
        className={styles.root({ className: cn(className) })}
        data-invalid={dataAttr(isInvalid)}
      >
        {children}
      </CheckboxPrimitive.Root>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props
    extends CheckboxPrimitive.Root.Props, CheckboxVariants {
    isInvalid?: boolean;
  }
}

export const CheckboxIndicator = (props: CheckboxPrimitive.Indicator.Props) => {
  const { styles } = useCheckboxContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <CheckboxPrimitive.Indicator
      {...restProps}
      className={styles.indicator({ className: cn(className) })}
    >
      {children}
    </CheckboxPrimitive.Indicator>
  );
};

const CheckIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />{" "}
    </svg>
  );
};

export const CheckboxGroupRoot = (props: CheckboxGroupPrimitive.Props) => {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={cn("flex flex-col items-start gap-2", props.className)}
    />
  );
};

export namespace CheckboxGroupRoot {
  export interface Props extends CheckboxGroupPrimitive.Props {}
}
