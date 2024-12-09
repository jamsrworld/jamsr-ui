import {
  useControlledState,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { useRadioGroupContext } from "./radio-group-context";
import type { RadioSlots, RadioVariantProps } from "./style";
import { radioVariant } from "./style";

interface Props extends UIProps<"input", keyof RadioVariantProps> {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  classNames?: SlotsToClasses<RadioSlots>;
  value?: string;
  defaultChecked?: boolean;
  isDisabled?: boolean;
}

export type UseRadioProps = Props & RadioVariantProps;

export const useRadio = ($props: UseRadioProps) => {
  const { radio:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const context = useRadioGroupContext();
  const {
    as,
    children,
    className,
    classNames,
    size = context?.size,
    color = context?.color,
    isDisabled: propIsDisabled = context?.isDisabled,
    description,
    isInvalid = context?.isInvalid,
    checked,
    defaultChecked,
    value,
    name,
    ...restProps
  } = props;

  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: propIsDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const inputRef = useMergeRefs([disableRef]);
  const baseRef = useMergeRefs([hoverRef]);

  const [
    isChecked = context ? context.selectedValue === value : false,
    setChecked,
  ] = useControlledState(defaultChecked, checked);

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
    isInvalid,
    size,
  });

  const getBaseProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "base",
        "data-selected": dataAttr(isChecked),
        "data-disabled": dataAttr(isDisabled),
        "data-hovered": dataAttr(isHovered),
        "aria-disabled": dataAttr(isDisabled),
        className: styles.base({
          className: cn(props?.className, classNames?.base, className),
        }),
        ref: baseRef,
      };
    },
    [
      className,
      classNames?.base,
      isChecked,
      isDisabled,
      isHovered,
      baseRef,
      styles,
    ],
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
        ref: inputRef,
      };
    },
    [inputName, onCheckedChange, inputRef, restProps, value],
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
