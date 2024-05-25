import { PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo, useState } from "react";
import { buttonVariant, type ButtonVariantProps } from "./style";

type Props = UIProps<"button"> & {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  spinnerPlacement?: "start" | "end";
  disableRipple?: boolean;
  disableAnimation?: boolean;
};

export type UseButtonProps = Props & ButtonVariantProps;

export const useButton = (props: UseButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const {
    as,
    children,
    startContent,
    endContent,
    autoFocus,
    className,
    isLoading = false,
    disabled = false,
    color,
    size,
    isIconOnly,
    spinnerPlacement = "start",
    fullWidth,
    rounded,
    variant,
    type = "button",
    disableRipple,
    disableAnimation = false,
    ...restProps
  } = props;

  const Component = as ?? "button";
  const isDisabled = isLoading || disabled;

  const styles = useMemo(
    () =>
      buttonVariant({
        size,
        color,
        className,
        isIconOnly,
        fullWidth,
        rounded,
        variant,
        disableAnimation,
      }),
    [
      size,
      color,
      className,
      isIconOnly,
      fullWidth,
      rounded,
      variant,
      disableAnimation,
    ],
  );

  const getButtonProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      disabled: isDisabled,
      "data-pressed": isPressed,
      type,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    };
  }, [isDisabled, isPressed, restProps, type]);

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
