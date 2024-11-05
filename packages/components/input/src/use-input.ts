import { useControlledState } from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  isEmpty,
  mergeProps,
  useDOMRef,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo, useState, type ComponentProps } from "react";
import {
  inputVariants,
  type InputSlots,
  type InputVariantProps,
} from "./style";

type Props = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: SlotsToClasses<InputSlots>;
  label?: string;
  labelHelperContent?: React.ReactNode;
  isNumberInput?: boolean;
  decimalPrecision?: number;
  isSecuredText?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  fullWidth?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid?: boolean;
  helperText?: string;
  baseRef?: React.Ref<HTMLDivElement>;
  inputWrapperRef?: React.Ref<HTMLDivElement>;
  ref?: React.Ref<HTMLInputElement>;
  slotProps?: {
    inputWrapper?: React.ComponentProps<"div">;
  };
  isRequired?: boolean;
  isOptional?: boolean;
};

type InputProps = UIProps<"input">;
export type UseInputProps = InputProps & Props & InputVariantProps;

export const useInput = ($props: UseInputProps) => {
  const { input = {} } = useUIStyle();
  const props = deepMergeProps(input, $props);
  const {
    as,
    label,
    labelHelperContent,
    className,
    classNames,
    size,
    isNumberInput,
    defaultValue,
    value: propValue,
    onValueChange,
    isInvalid,
    type,
    isSecuredText,
    showPassword: propShowPassword,
    setShowPassword: propSetShowPassword,
    startContent,
    endContent,
    onChange,
    fullWidth = false,
    variant = "standard",
    helperText,
    decimalPrecision = 2,
    baseRef,
    inputWrapperRef,
    children,
    ref,
    isRequired = false,
    isOptional = false,
    slotProps = {},
    placeholder,
    isFilled,
    isTextarea,
    ...restProps
  } = props;

  const Component = as ?? "div";
  const InputComponent = "input";
  const inputDOMRef = useDOMRef(ref);
  const [isFocused, setIsFocused] = useState(false);

  const styles = inputVariants({
    variant,
    size,
    isInvalid,
    fullWidth,
    isRequired,
    isOptional,
    isFilled,
    isTextarea,
  });

  const [value = "", setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const [showPassword, setShowPassword] = useControlledState(
    false,
    propShowPassword,
    propSetShowPassword,
  );

  const isFilledWithin =
    !isEmpty(placeholder) ||
    !isEmpty(value) ||
    !isEmpty(startContent) ||
    isFocused;
  const hasLabel = !isEmpty(label) || !isEmpty(labelHelperContent);
  const hasStartContent = !isEmpty(startContent);
  const hasEndContent = !isEmpty(endContent);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value: crrValue } = e.target;
      crrValue = String(crrValue);

      if (isNumberInput) {
        if (decimalPrecision < 1) {
          const newValue = crrValue.replace(/\D/g, "");
          crrValue = newValue;
        } else {
          const regexString = `^\\$?\\d*\\.?\\d{0,${decimalPrecision}}$`;
          const regex = new RegExp(regexString);

          if (!regex.test(crrValue)) {
            crrValue = value;
          } else {
            crrValue = crrValue.replace(/^\$/, "");
          }
        }
      }

      onChange?.(e);
      setValue(crrValue);
    },
    [isNumberInput, onChange, setValue, decimalPrecision, value],
  );

  const handleChangeInputType = useCallback(
    () => setShowPassword((prev) => !prev),
    [setShowPassword],
  );

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

  const getInputWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ref: inputWrapperRef,
        ...props,
        "data-slot": "input-wrapper",
        ...mergeProps(slotProps.inputWrapper ?? {}, {
          className: styles.inputWrapper({
            className: cn(classNames?.inputWrapper, props?.className),
          }),
          onClick: handleFocusInput,
        }),
      };
    },
    [
      inputWrapperRef,
      slotProps.inputWrapper,
      styles,
      classNames?.inputWrapper,
      handleFocusInput,
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

  const inputType = useMemo(() => {
    if (isSecuredText) {
      return showPassword ? "text" : "password";
    }
    return type;
  }, [isSecuredText, showPassword, type]);

  const getInputProps: PropGetter<ComponentProps<"input">> = useCallback(
    (props) => {
      return {
        "data-slot": "input",
        className: styles.input({
          className: cn(classNames?.input, props?.className, className),
        }),
        value,
        onChange: handleInputChange,
        type: inputType,
        placeholder,
        ...restProps,
        ...props,
        ref: inputDOMRef,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      };
    },
    [
      value,
      styles,
      classNames?.input,
      className,
      handleInputChange,
      inputType,
      placeholder,
      restProps,
      inputDOMRef,
      handleOnFocus,
      handleOnBlur,
    ],
  );

  const getContentWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "content-wrapper",
        className: styles.contentWrapper({
          className: cn(classNames?.contentWrapper, props?.className),
        }),
      };
    },
    [styles, classNames?.contentWrapper],
  );

  const getNotationProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "notation",
        className: styles.notation({
          className: cn(classNames?.notation, props?.className),
        }),
      };
    },
    [styles, classNames?.notation],
  );

  const hasNotation = isRequired === true || isOptional === true;

  return {
    Component,
    InputComponent,
    children,
    classNames,
    label,
    helperText,
    startContent,
    endContent,
    variant,
    isInvalid,
    isSecuredText,
    showPassword,
    hasNotation,
    getBaseProps,
    labelHelper: labelHelperContent,
    getLabelWrapperProps,
    getLabelProps,
    getInputProps,
    getInputWrapperProps,
    getHelperProps,
    getInnerWrapperProps,
    handleChangeInputType,
    getMainWrapperProps,
    getStartContentProps,
    getEndContentProps,
    getNotationProps,
    getContentWrapperProps,
  };
};
