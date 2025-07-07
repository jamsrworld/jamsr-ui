import {
  useControlledState,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { useRadioGroupContext } from "./radio-group-context";
import type { RadioSlots, RadioVariantProps } from "./styles";
import { radioVariant } from "./styles";

type Props = {
  children?: React.ReactNode;
  description?: string | React.ReactNode;
  classNames?: SlotsToClasses<RadioSlots>;
  value?: string;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  isFormControl?: boolean;
} & RadioVariantProps;

export type UseRadioProps = UIProps<"input", Props>;

export const useRadio = ($props: UseRadioProps) => {
  const { radio: _globalProps = {} } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    radioVariant.variantKeys,
  );
  const context = useRadioGroupContext();
  const {
    size = context?.size,
    color = context?.color,
    isInvalid = context?.isInvalid,
  } = variantProps;
  const {
    as,
    children,
    className,
    classNames,
    isDisabled: propIsDisabled = context?.isDisabled ?? false,
    description,
    checked,
    defaultChecked,
    value,
    name,
    isFormControl = false,
    ...restProps
  } = props;

  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: propIsDisabled,
    isFormControl,
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
        className: "hidden",
        value,
        name: inputName,
        disabled: isDisabled,
        ...props,
        ...restProps,
        ref: inputRef,
      };
    },
    [onCheckedChange, value, inputName, isDisabled, restProps, inputRef],
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
