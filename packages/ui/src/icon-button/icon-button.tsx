import { useId } from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { dataAttr } from "@jamsrui/utils";
import { mergeProps } from "react-aria";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";
import { cn } from "tailwind-variants";

import { CircularProgress } from "../circular-progress";
import { iconButtonStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type IconButtonVariantProps = VariantProps<typeof iconButtonStyles>;

export const IconButton = (props: IconButton.Props) => {
  const {
    color,
    size,
    variant,
    radius,
    isLoading,
    className,
    children,
    label,
    ...restProps
  } = props;
  const labelId = useId();

  const { isPressed, pressProps } = usePress({ isDisabled: props.disabled });
  const { isHovered, hoverProps } = useHover({ isDisabled: props.disabled });
  const { isFocusVisible, focusProps, isFocused } = useFocusRing({});
  return (
    <ButtonPrimitive
      aria-labelledby={labelId}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-focused={dataAttr(isFocused)}
      data-hovered={dataAttr(isHovered)}
      data-pressed={dataAttr(isPressed)}
      {...mergeProps(pressProps, hoverProps, focusProps, restProps)}
      className={iconButtonStyles({
        color,
        size,
        variant,
        radius,
        className: cn(className),
      })}
    >
      <span className="sr-only" id={labelId}>
        {label}
      </span>
      {isLoading ? <CircularProgress /> : null}
      {!isLoading && children}
    </ButtonPrimitive>
  );
};

export namespace IconButton {
  export interface Props extends ButtonPrimitive.Props, IconButtonVariantProps {
    isLoading?: boolean;
    label: string;
  }
}
