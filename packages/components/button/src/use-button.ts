import { useHover, useMergeRefs, usePress } from "@jamsr-ui/hooks";
import { type PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import { button, type ButtonVariantProps } from "./style";

type Props = UIProps<"button"> & {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  spinnerPlacement?: "start" | "end";
  disableRipple?: boolean;
  disableAnimation?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
};

export type UseButtonProps = Props & ButtonVariantProps;

export const useButton = (props: UseButtonProps) => {
  const {
    as,
    children,
    startContent,
    endContent,
    className,
    isLoading = false,
    disabled = false,
    isDisabled: $isDisabled = false,
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
    ref: $ref,
    ...restProps
  } = props;
  const isDisabled = isLoading || disabled || $isDisabled;
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const ref = useMergeRefs([pressRef, hoverRef, $ref]);

  const Component = as ?? "button";

  const styles = useMemo(
    () =>
      button({
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
      "data-hovered": isHovered,
      type,
      ref,
    };
  }, [restProps, isDisabled, isPressed, isHovered, type, ref]);

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
