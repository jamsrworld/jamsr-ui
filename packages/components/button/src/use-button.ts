import {
  useHover,
  useIsDisabled,
  useMergeRefs,
  usePress,
} from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  dataAttr,
  deepMergeProps,
  type PropGetter,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import { button, type ButtonVariantProps } from "./styles";

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

export const useButton = ($props: UseButtonProps) => {
  const { button: buttonStyles = {} } = useUIStyle();
  const props = deepMergeProps(buttonStyles, $props);
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
    spinnerPlacement = "start",
    fullWidth,
    isRounded,
    variant,
    type = "button",
    disableRipple,
    disableAnimation = false,
    ref: propRef,
    radius,
    ...restProps
  } = props;

  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: isLoading || disabled || $isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const ref = useMergeRefs([pressRef, disableRef, hoverRef, propRef]);

  const Component = as ?? "button";
  const styles = useMemo(
    () =>
      button({
        size,
        color,
        className,
        fullWidth,
        isRounded,
        variant,
        disableAnimation,
        radius,
      }),
    [
      size,
      color,
      className,
      fullWidth,
      isRounded,
      variant,
      disableAnimation,
      radius,
    ],
  );

  const getButtonProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
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
    spinnerPlacement,
    isDisabled,
    disableRipple,
    getButtonProps,
  };
};
