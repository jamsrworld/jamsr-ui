import { type PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo, useState } from "react";
import { buttonVariant, type ButtonVariantProps } from "./style";

type Props = UIProps<"button"> & {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  spinnerPlacement?: "start" | "end";
  disableRipple?: boolean;
  disableAnimation?: boolean;
};

export type UseButtonProps = Props & ButtonVariantProps;

export const useButton = (props: UseButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const {
    as,
    children,
    startContent,
    endContent,
    className,
    isLoading = false,
    disabled = false,
    isDisabled: isDisabledProp = false,
    color,
    size,
    isIconOnly,
    spinnerPlacement = "start",
    fullWidth,
    isRounded,
    variant,
    type = "button",
    disableRipple,
    disableAnimation = false,
    ...restProps
  } = props;

  const Component = as ?? "button";
  const isDisabled = isLoading || disabled || isDisabledProp;

  // for hover
  const handleMouseOver = () => {
    if (isDisabled) return;
    setIsHovered(true);
  };
  const handleMouseOut = () => setIsHovered(false);

  const styles = useMemo(
    () =>
      buttonVariant({
        size,
        color,
        className,
        isIconOnly,
        fullWidth,
        isRounded,
        variant,
        disableAnimation,
      }),
    [
      size,
      color,
      className,
      isIconOnly,
      fullWidth,
      isRounded,
      variant,
      disableAnimation,
    ],
  );

  const getButtonProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      disabled: isDisabled,
      "data-disabled": isDisabled,
      "data-pressed": isPressed,
      "data-hover": isHovered,
      type,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
    };
  }, [handleMouseOver, isDisabled, isHovered, isPressed, restProps, type]);

  return {
    Component,
    children,
    styles,
    startContent,
    endContent,
    isLoading,
    isIconOnly,
    spinnerPlacement,
    isDisabled,
    disableRipple,
    getButtonProps,
  };
};
