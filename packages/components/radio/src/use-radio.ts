import {
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { useControlledState } from "@jamsr-ui/hooks";
import { useRadioGroupContext } from "./radio-group-context";
import type { RadioSlots, RadioVariantProps } from "./style";
import { radioVariant } from "./style";

interface Props extends UIProps<"input", keyof RadioVariantProps> {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  classNames?: SlotsToClasses<RadioSlots>;
  value?: string;
  defaultChecked?: boolean;
}

export type UseRadioProps = Props & RadioVariantProps;

export const useRadio = (props: UseRadioProps) => {
  const context = useRadioGroupContext();

  const {
    as,
    children,
    className,
    classNames,
    size = context?.size,
    color = context?.color,
    isDisabled = context?.isDisabled,
    description,
    isInvalid = context?.isInvalid,
    checked,
    defaultChecked,
    value,
    name,
    ...restProps
  } = props;

  const [
    isChecked = context ? context.selectedValue === value : false,
    setChecked,
  ] = useControlledState({
    prop: checked,
    defaultProp: defaultChecked,
  });

  const Component = as ?? "label";
  const inputName = name ?? context?.name;

  const onCheckedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!context) {
        setChecked(!!value);
      }
      context?.onSelectedValueChange(value);
    },
    [context, setChecked],
  );

  const styles = radioVariant({
    className,
    color,
    isDisabled,
    isInvalid,
    size,
  });

  const getBaseProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "base",
        "data-selected": dataAttr(isChecked),
        className: styles.base({
          className: cn(props?.className, classNames?.base, className),
        }),
      };
    },
    [className, classNames?.base, isChecked, styles],
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

  const getControlProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "control",
        className: styles.control({
          className: cn(classNames?.control, props?.className),
        }),
      };
    },
    [classNames?.control, styles],
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
    [classNames?.labelWrapper, styles],
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
    [classNames?.label, styles],
  );

  const getDescriptionProps: PropGetter<ComponentProps<"p">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "description",
        className: styles.description({
          className: cn(classNames?.description, props?.className),
        }),
      };
    },
    [classNames?.description, styles],
  );

  const getInputProps: PropGetter<ComponentProps<"input">> = useCallback(
    (props) => {
      return {
        onChange: onCheckedChange,
        type: "radio",
        className: "sr-only",
        value,
        name: inputName,
        ...props,
        ...restProps,
      };
    },
    [inputName, onCheckedChange, restProps, value],
  );

  return {
    Component,
    getBaseProps,
    getWrapperProps,
    getControlProps,
    getLabelWrapperProps,
    getLabelProps,
    getDescriptionProps,
    getInputProps,
    children,
    description,
  };
};
