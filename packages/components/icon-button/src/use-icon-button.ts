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
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import { iconButton, type ButtonVariantProps } from "./styles";

type Props = UIProps<"button"> & {
  isLoading?: boolean;
  isDisabled?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  "aria-label": string;
};

export type UseIconButtonProps = Props & ButtonVariantProps;

export const useIconButton = ($props: UseIconButtonProps) => {
  const { iconButton: _globalProps = {}, globalConfig } = useUIStyle();
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
    "aria-label": ariaLabel,
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
      iconButton({
        ...variantProps,
        className,
      }),
    [variantProps, className],
  );

  const getButtonProps: PropGetter = useCallback(() => {
    return {
      ...restProps,
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
      "aria-label": ariaLabel,
      type,
      ref,
    };
  }, [restProps, isDisabled, isPressed, isHovered, ariaLabel, type, ref]);

  return {
    Component,
    children,
    styles,
    isDisabled,
    disableRipple,
    getButtonProps,
    isLoading,
  };
};
