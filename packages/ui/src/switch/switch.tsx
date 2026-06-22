"use client";

import { createContext, use } from "react";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { mergeProps } from "react-aria/mergeProps";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";

import { switchStyles } from "./styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

import type { SwitchVariants } from "./styles";

const SwitchContext = createContext<{
  styles: ReturnType<typeof switchStyles>;
} | null>(null);

const useSwitchContext = () => {
  const ctx = use(SwitchContext);
  if (!ctx) {
    throw new Error("useSwitchContext must be used within a SwitchContext");
  }
  return ctx;
};

export const Switch = (props: Switch.Props) => {
  const {
    color,
    size,
    isInvalid,
    className,
    children = <SwitchThumb />,
    disabled,
    readOnly,
    onClick,
    ...restProps
  } = props;
  const styles = switchStyles({ color, size, isInvalid });

  const isNotInteractive = disabled === true || readOnly === true;
  const { isPressed, pressProps } = usePress({
    isDisabled: isNotInteractive,
    onClick(e) {
      onClick?.(e as any);
    },
  });
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({});
  const { hoverProps, isHovered } = useHover({ isDisabled: isNotInteractive });
  return (
    <SwitchContext value={{ styles }}>
      <SwitchPrimitive.Root
        data-focus-visible={dataAttr(isFocusVisible)}
        data-focused={dataAttr(isFocused)}
        data-hovered={dataAttr(isHovered)}
        data-pressed={dataAttr(isPressed)}
        {...mergeProps(pressProps, focusProps, hoverProps, restProps)}
        className={styles.root({ className: cn(className) })}
      >
        {children}
      </SwitchPrimitive.Root>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends SwitchPrimitive.Root.Props, SwitchVariants {}
}

export const SwitchThumb = (props: SwitchPrimitive.Thumb.Props) => {
  const { styles } = useSwitchContext();
  return (
    <SwitchPrimitive.Thumb
      {...props}
      className={styles.thumb({ className: cn(props.className) })}
    />
  );
};
