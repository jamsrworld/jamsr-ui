import { useUIConfig } from "@jamsr-ui/config";
import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
  deepMergeProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import type { RadioProps } from "./radio";
import { radioGroupVariant, type RadioGroupSlots } from "./styles";
import { RadioValue } from "./type";

type Common = Pick<
  RadioProps,
  "isInvalid" | "size" | "color" | "isDisabled" | "onChange" | "name"
>;

export type ContextType = Common & {
  selectedValue: RadioValue;
  onSelectedValueChange: (value: RadioValue) => void;
};

type Props = {
  value?: RadioValue;
  onValueChange?: (value: RadioValue) => void;
  classNames?: SlotsToClasses<RadioGroupSlots>;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  defaultValue?: RadioValue;
  isFormControl?: boolean;
};

export type UseRadioGroupProps = Props &
  Omit<UIProps<"div">, "onChange"> &
  Common;

export const useRadioGroup = ($props: UseRadioGroupProps) => {
  const { radioGroup: Props = {} } = useUIConfig();
  const props = deepMergeProps(Props, $props);

  const {
    as,
    className,
    classNames,
    size,
    color,
    isInvalid,
    isDisabled,
    onChange,
    value: propValue,
    defaultValue: propDefaultValue,
    onValueChange,
    name,
    label,
    children,
    helperText,
    isFormControl,
    ...restProps
  } = props as UseRadioGroupProps;

  const Component = as ?? "div";

  const [selectedValue = "", setSelectedValue] = useControlledState(
    propDefaultValue,
    propValue,
    onValueChange,
  );

  const context: ContextType = {
    isInvalid,
    color,
    isDisabled,
    name,
    onChange,
    size,
    selectedValue,
    onSelectedValueChange: setSelectedValue,
  };

  const styles = radioGroupVariant({
    className,
    isInvalid,
  });

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        ...restProps,
        "data-slot": "base",
        className: styles.base({ className: cn(classNames?.base, className) }),
      };
    },
    [className, classNames?.base, restProps, styles],
  );

  const getWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "wrapper",
        className: styles.wrapper({
          className: cn(classNames?.wrapper, props?.className),
        }),
      };
    },
    [classNames?.wrapper, styles],
  );

  const getLabelProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label",
        className: styles.label({ className: classNames?.label }),
      };
    },
    [classNames?.label, styles],
  );

  const getHelperTextProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "helper-text",
        className: styles.helperText({
          className: classNames?.helperText,
        }),
      };
    },
    [classNames?.helperText, styles],
  );

  const getContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "content",
        className: styles.content({ className: classNames?.content }),
      };
    },
    [classNames?.content, styles],
  );

  return {
    Component,
    context,
    getBaseProps,
    getHelperTextProps,
    getLabelProps,
    getWrapperProps,
    label,
    children,
    helperText,
    getContentProps,
  };
};
