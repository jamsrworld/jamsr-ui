import { useControlledState } from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback } from "react";
import { stepper, type StepperSlots, type StepperVariantsProps } from "./style";

type Props = UIProps<"div"> & {
  classNames?: SlotsToClasses<StepperSlots>;
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
};

export type UseStepperProps = Props & StepperVariantsProps;

export const useStepper = ($props: UseStepperProps) => {
  const { stepper:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const {
    as,
    classNames,
    className,
    value: $value,
    defaultValue,
    onValueChange,
    minValue = -Infinity,
    maxValue = Infinity,
    onIncrease,
    onDecrease,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const [value, setValue] = useControlledState(
    Math.max(defaultValue ?? 0, minValue, 0),
    $value,
    onValueChange,
  );

  const styles = stepper({
    className,
  });

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        ...props,
        ...restProps,
        "data-component": "stepper",
        "data-slot": "base",
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
      };
    },
    [className, classNames?.base, restProps, styles],
  );

  const getValueProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        ...props,
        "data-slot": "value",
        className: styles.value({ className: classNames?.value }),
      };
    },
    [classNames?.value, styles],
  );

  const getButtonProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        ...props,
        "data-slot": "button",
        className: styles.button({ className: classNames?.button }),
      };
    },
    [classNames?.button, styles],
  );

  return {
    Component,
    getBaseProps,
    getValueProps,
    getButtonProps,
    minValue,
    maxValue,
    onIncrease,
    onDecrease,
    value,
    setValue,
  };
};
