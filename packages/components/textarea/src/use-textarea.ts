import { useControlledState } from "@jamsr-ui/hooks";
import { inputVariants } from "@jamsr-ui/input";
import {
  cn,
  dataAttr,
  deepMergeProps,
  isEmpty,
  useDOMRef,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useState, type ComponentProps } from "react";

import { useUIStyle } from "@jamsr-ui/styles";
import { type TextareaSlots, type TextareaVariantProps } from "./style";

type Props = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: SlotsToClasses<TextareaSlots>;
  label?: string;
  labelHelperContent?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  fullWidth?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  baseRef?: React.Ref<HTMLDivElement>;
  inputWrapperRef?: React.Ref<HTMLDivElement>;
  ref?: React.Ref<HTMLInputElement>;
};

export type UseTextareaProps = Props &
  UIProps<"textarea"> &
  TextareaVariantProps;

export const useTextarea = ($props: UseTextareaProps) => {
  const { textarea: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    as,
    label,
    labelHelperContent,
    className,
    classNames,
    size,
    defaultValue,
    value: propValue,
    onValueChange,
    isInvalid = false,
    startContent,
    endContent,
    onChange,
    fullWidth = false,
    variant = "standard",
    helperText,
    isFilled = false,
    isOptional = false,
    isRequired = false,
    placeholder,
    baseRef,
    inputWrapperRef,
    ref,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const TextareaComponent = "textarea";
  const inputDOMRef = useDOMRef(ref);
  const [isFocused, setIsFocused] = useState(false);

  const styles = inputVariants({
    variant,
    size,
    isInvalid,
    isTextarea: true,
    fullWidth,
    isFilled,
    isOptional,
    isRequired,
  });

  const [value, setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      setValue(e.target.value);
    },
    [onChange, setValue],
  );

  const isFilledWithin =
    !isEmpty(placeholder) ||
    !isEmpty(value) ||
    !isEmpty(startContent) ||
    isFocused;
  const hasLabel = !isEmpty(label) || !isEmpty(labelHelperContent);
  const hasStartContent = !isEmpty(startContent);
  const hasEndContent = !isEmpty(endContent);

  const handleFocusInput = useCallback(() => {
    inputDOMRef.current?.focus();
  }, [inputDOMRef]);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        className: styles.base({
          className: cn(classNames?.base, props?.className),
        }),
        ref: baseRef,
        "data-focused": dataAttr(isFocused),
        "data-filled-within": dataAttr(isFilledWithin),
        "data-has-label": dataAttr(hasLabel),
        "data-has-start-content": dataAttr(hasStartContent),
        "data-has-end-content": dataAttr(hasEndContent),
        ...props,
      };
    },
    [
      styles,
      classNames?.base,
      baseRef,
      isFocused,
      isFilledWithin,
      hasLabel,
      hasStartContent,
      hasEndContent,
    ],
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
        ...props,
        "data-slot": "inner-wrapper",
        className: styles.innerWrapper({
          className: cn(classNames?.innerWrapper, props?.className),
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
          className: cn(classNames?.helper, props?.className),
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
          className: cn(classNames?.mainWrapper, props?.className),
        }),
      };
    },
    [styles, classNames?.mainWrapper],
  );

  const getTextareaWrapperProps: PropGetter<ComponentProps<"div">> =
    useCallback(
      (props) => {
        return {
          ref: inputWrapperRef,
          ...props,
          "data-slot": "textarea-wrapper",
          className: styles.inputWrapper({
            className: cn(classNames?.inputWrapper, props?.className),
          }),
          onClick: handleFocusInput,
        };
      },
      [inputWrapperRef, styles, classNames?.inputWrapper, handleFocusInput],
    );

  const getTextareaProps: PropGetter<ComponentProps<"textarea">> = useCallback(
    (props) => {
      return {
        "data-slot": "textarea",
        className: styles.input({
          className: cn(classNames?.input, props?.className, className),
        }),
        value,
        placeholder,
        onChange: handleTextareaChange,
        ...restProps,
        ...props,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      };
    },
    [
      styles,
      classNames?.input,
      className,
      value,
      placeholder,
      handleTextareaChange,
      restProps,
      handleOnFocus,
      handleOnBlur,
    ],
  );

  const getStartContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "start-content",
        className: styles.startContent({
          className: cn(classNames?.startContent, props?.className),
        }),
      };
    },
    [styles, classNames?.startContent],
  );

  const getEndContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "end-content",
        className: styles.endContent({
          className: cn(classNames?.endContent, props?.className),
        }),
      };
    },
    [styles, classNames?.endContent],
  );

  return {
    Component,
    TextareaComponent,
    classNames,
    label,
    helperText,
    startContent,
    endContent,
    variant,
    isInvalid,
    getBaseProps,
    labelHelperContent,
    getLabelWrapperProps,
    getLabelProps,
    getTextareaProps,
    getTextareaWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    getMainWrapperProps,
    getStartContentProps,
    getEndContentProps,
  };
};
