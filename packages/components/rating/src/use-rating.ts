import { useControlledState } from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/styles";
import type { PropGetter, SlotsToClasses, UIProps } from "@jamsr-ui/utils";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import type { RatingSlots } from "./style";
import { ratingVariants } from "./style";

type Props = {
  isReadonly?: boolean;
  isDisabled?: boolean;
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  label?: string;
  classNames?: SlotsToClasses<RatingSlots>;
  className?: string;
  isInvalid?: boolean;
  helperText?: string;
  isFormControl?: boolean;
};
export type UseRatingProps = Props & ComponentProps<"div">;

export const useRating = ($props: UseRatingProps) => {
  const { rating: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    ratingVariants.variantKeys,
  );

  const {
    className,
    classNames,
    label,
    isReadonly,
    onValueChange,
    value: propValue,
    defaultValue,
    helperText,
    isFormControl = false,
    ...restProps
  } = props;

  const styles = ratingVariants({
    className,
    ...variantProps,
  });
  const maxValue = 5;

  const [value = 0, setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  if (value > maxValue) {
    console.warn(`Rating max value is ${maxValue}, current value is ${value}`);
  }

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        "data-readonly": dataAttr(isReadonly),
        className: styles.base({
          className: cn(classNames?.base, props?.className),
        }),
        ...props,
        ...restProps,
      };
    },
    [isReadonly, styles, classNames?.base, restProps],
  );

  const getLabelWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label-wrapper",
        className: styles.labelWrapper({
          className: cn(classNames?.labelWrapper, props?.className),
        }),
      };
    },
    [styles, classNames?.labelWrapper],
  );

  const getLabelProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label",
        className: styles.label({
          className: cn(classNames?.label, props?.className),
        }),
      };
    },
    [styles, classNames?.label],
  );

  const getInnerWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "inner-wrapper",
        className: styles.innerWrapper({
          className: cn(classNames?.innerWrapper, props?.className),
        }),
        ...props,
      };
    },
    [styles, classNames?.innerWrapper],
  );

  const getHelperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "helper",
        className: styles.helper({
          className: cn(classNames?.helper, props?.className),
        }),
      };
    },
    [styles, classNames?.helper],
  );

  const getStarProps: PropGetter<ComponentProps<"svg">> = useCallback(
    (props) => {
      return {
        ...props,
        className: styles.star({
          className: cn(classNames?.star, props?.className),
        }),
      };
    },
    [styles, classNames?.star],
  );

  return {
    value,
    label,
    maxValue,
    setValue,
    getBaseProps,
    getLabelWrapperProps,
    getLabelProps,
    getInnerWrapperProps,
    getHelperProps,
    getStarProps,
    helperText,
    styles,
    isDisabled: variantProps.isDisabled,
    isReadonly,
    classNames,
  };
};
