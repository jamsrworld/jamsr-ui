import {
  useHover,
  useIsDisabled,
  useMergeRefs,
  usePress,
} from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/config";
import {
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import { button, type ButtonVariantProps } from "./styles";

export interface ButtonCustomProps {}
type Props = ButtonCustomProps &
  UIProps<"button"> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    isLoading?: boolean;
    isDisabled?: boolean;
    spinnerPlacement?: "start" | "end";
    disableRipple?: boolean;
    disableAnimation?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
    spinner?: React.ReactNode;
    isFormControl?: boolean;
  };

export type UseButtonProps = Props & ButtonVariantProps;
export const useButton = ($props: UseButtonProps) => {
  const { button: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    button.variantKeys,
  );

  const {
    as,
    children,
    startContent,
    endContent,
    className,
    isLoading = false,
    disabled = false,
    isDisabled: $isDisabled = false,
    spinnerPlacement = "start",
    type = "button",
    disableRipple,
    ref: propRef,
    spinner,
    isFormControl = type === "submit" || type === "reset",
    ...restProps
  } = props;

  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: isLoading || disabled || $isDisabled,
    isFormControl,
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
        ...variantProps,
        className,
      }),
    [className, variantProps],
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
    spinner,
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
