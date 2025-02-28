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
import { type ComponentProps, useCallback, useId, useMemo } from "react";
import { iconButton, type ButtonVariantProps } from "./styles";

type Props = UIProps<"button"> & {
  isLoading?: boolean;
  isDisabled?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  spinner?: React.ReactNode;
  label: string;
  isFormControl?: boolean;
};

export type UseIconButtonProps = Props & ButtonVariantProps;

export const useIconButton = ($props: UseIconButtonProps) => {
  const { iconButton: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    iconButton.variantKeys,
  );
  const {
    as,
    children,
    className,
    isLoading = false,
    disabled = false,
    isDisabled: $isDisabled = false,
    type = "button",
    disableRipple,
    ref: propRef,
    label: ariaLabel,
    spinner,
    isFormControl = false,
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
      iconButton({
        ...variantProps,
        className,
      }),
    [variantProps, className],
  );

  const id = useId();

  const getButtonProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      disabled: isDisabled,
      "data-component": "button",
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
      "aria-label": ariaLabel,
      "aria-labelledby": id,
      className: styles,
      type,
      ref,
    };
  }, [
    restProps,
    isDisabled,
    isPressed,
    isHovered,
    ariaLabel,
    id,
    styles,
    type,
    ref,
  ]);

  const getLabelProps: PropGetter<ComponentProps<"span">> = useCallback(() => {
    return {
      "aria-hidden": true,
      id,
      className: "sr-only",
    };
  }, [id]);

  return {
    Component,
    children,
    isDisabled,
    disableRipple,
    getButtonProps,
    isLoading,
    getLabelProps,
    spinner,
    ariaLabel,
  };
};
