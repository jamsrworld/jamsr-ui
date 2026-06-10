import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { mergeProps } from "react-aria/mergeProps";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";

import { CircularProgress } from "../circular-progress";
import { buttonStyles } from "./styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export const Button = (props: Button.Props) => {
  const {
    color,
    size,
    variant,
    isLoading,
    className,
    children,
    radius,
    ...restProps
  } = props;

  const { isPressed, pressProps } = usePress({ isDisabled: props.disabled });
  const { isHovered, hoverProps } = useHover({ isDisabled: props.disabled });
  const { isFocusVisible, focusProps, isFocused } = useFocusRing({});
  return (
    <ButtonPrimitive
      data-focus-visible={dataAttr(isFocusVisible)}
      data-focused={dataAttr(isFocused)}
      data-hovered={dataAttr(isHovered)}
      data-pressed={dataAttr(isPressed)}
      {...mergeProps(pressProps, hoverProps, focusProps, restProps)}
      className={buttonStyles({
        color,
        size,
        variant,
        className: cn(className),
        radius,
      })}
    >
      {isLoading ? <CircularProgress /> : null}
      {children}
    </ButtonPrimitive>
  );
};

export namespace Button {
  export interface Props extends ButtonPrimitive.Props, ButtonVariantProps {
    isLoading?: boolean;
  }
}
