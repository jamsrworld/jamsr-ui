import { useControlledState } from "@jamsr-ui/hooks";
import { inputVariants } from "@jamsr-ui/input";
import {
  cn,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, type ComponentProps } from "react";

import { type TextareaSlots, type TextareaVariantProps } from "./style";

type Props = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: SlotsToClasses<TextareaSlots>;
  label: string | null;
  labelHelperContent?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  fullWidth?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
};

export type UseTextareaProps = Props &
  UIProps<"textarea"> &
  TextareaVariantProps;

export const useTextarea = (props: UseTextareaProps) => {
  const {
    as,
    label,
    labelPlacement,
    labelHelperContent,
    className,
    classNames,
    size,
    defaultValue,
    value: propValue,
    onValueChange,
    isInvalid,
    startContent,
    endContent,
    onChange,
    fullWidth,
    variant,
    helperText,
    ref,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const TextareaComponent = "textarea";

  const styles = inputVariants({
    variant,
    size,
    isInvalid,
    labelPlacement,
  });

  const [value, setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      setValue(e.target.value);
    },
    [onChange, setValue, value],
  );

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        className: styles.base({
          class: cn(classNames?.base, props?.className),
        }),
        ...props,
      };
    },
    [styles, classNames?.base],
  );

  const getLabelWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label-wrapper",
        className: styles.labelWrapper({
          class: cn(classNames?.labelWrapper, props?.className),
        }),
      };
    },
    [styles, classNames?.labelWrapper],
  );

  const getLabelProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label",
        className: styles.label({
          class: cn(classNames?.label, props?.className),
        }),
      };
    },
    [styles, classNames?.label],
  );

  const getInnerWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "inner-wrapper",
        className: styles.innerWrapper({
          class: cn(classNames?.innerWrapper, props?.className),
        }),
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
          class: cn(classNames?.helper, props?.className),
        }),
      };
    },
    [styles, classNames?.helper],
  );

  const getMainWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "main-wrapper",
        className: styles.mainWrapper({
          class: cn(classNames?.mainWrapper, props?.className),
        }),
      };
    },
    [styles, classNames?.mainWrapper],
  );

  const getTextareaWrapperProps: PropGetter<ComponentProps<"div">> =
    useCallback(
      (props) => {
        return {
          ...props,
          ref,
          "data-slot": "textarea-wrapper",
          className: styles.inputWrapper({
            class: cn(classNames?.textareaWrapper, props?.className),
          }),
        };
      },
      [ref, styles, classNames?.textareaWrapper],
    );

  const getTextareaProps: PropGetter<ComponentProps<"textarea">> = useCallback(
    (props) => {
      return {
        "data-slot": "textarea",
        className: styles.input({
          class: cn(classNames?.textarea, props?.className, className),
        }),
        value,
        onChange: handleTextareaChange,
        ...restProps,
        ...props,
      };
    },
    [
      value,
      styles,
      classNames?.textarea,
      className,
      handleTextareaChange,
      restProps,
    ],
  );

  return {
    Component,
    TextareaComponent,
    classNames,
    label,
    helperText,
    startContent,
    endContent,
    labelPlacement,
    isInvalid,
    getBaseProps,
    labelHelper: labelHelperContent,
    getLabelWrapperProps,
    getLabelProps,
    getTextareaProps,
    getTextareaWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    getMainWrapperProps,
  };
};
