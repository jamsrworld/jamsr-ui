import {
  useControlledState,
  useFocus,
  useFocusVisible,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { type IconButtonProps } from "@jamsr-ui/icon-button";
import { useUIConfig } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  formLabelProps,
  isEmpty,
  mapPropsVariants,
  mergeGlobalProps,
  mergeProps,
  useDOMRef,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type React from "react";
import { useCallback, useMemo, type ComponentProps } from "react";
import {
  inputVariants,
  type InputSlots,
  type InputVariantProps,
} from "./styles";

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
  isClearable?: boolean;
  onClearInput?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showClearButton?: boolean;
  isDisabled?: boolean;
  slots?: {
    eyeOpenIcon?: React.ReactNode;
    eyeClosedIcon?: React.ReactNode;
    clearIcon?: React.ReactNode;
  };
  isFormControl?: boolean;
} & InputVariantProps;

export type UseInputProps = UIProps<"input", Props>;

export const useInput = ($props: UseInputProps) => {
  const { input: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    inputVariants.variantKeys,
  );
  const {
    as,
    label,
    labelHelperContent,
    className,
    classNames,
    isNumberInput,
    defaultValue,
    value: propValue,
    onValueChange,
    type,
    isSecuredText,
    showPassword: propShowPassword,
    setShowPassword: propSetShowPassword,
    startContent,
    endContent,
    onChange,
    helperText,
    decimalPrecision = 2,
    baseRef,
    inputWrapperRef: $inputWrapperRef,
    children,
    ref,
    slotProps = {},
    placeholder,
    isClearable = false,
    onClearInput,
    showClearButton,
    disabled = false,
    isDisabled: $isDisabled = false,
    slots = {},
    isFormControl = false,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const InputComponent = "input";
  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: disabled || $isDisabled,
    isFormControl,
  });
  const { isFocused, ref: focusRef } = useFocus<HTMLInputElement>({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const refs = useMergeRefs([ref, disableRef, focusRef, focusVisibleRef]);
  const inputDOMRef = useDOMRef(refs);
  const inputWrapperRef = useMergeRefs([hoverRef, $inputWrapperRef]);
  const styles = inputVariants(variantProps);
  const {
    isRequired,
    isOptional,
    variant = "standard",
    isInvalid,
  } = variantProps;

  const [value = "", setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const [$showPassword, setShowPassword] = useControlledState(
    false,
    propShowPassword,
    propSetShowPassword,
  );
  const showPassword = isDisabled ? false : $showPassword;

  const handleClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClearInput?.(e);
      setValue("");
    },
    [onClearInput, setValue],
  );

  const isFilledWithin =
    (label?.length ?? 0) > 0 &&
    (!isEmpty(placeholder) ||
      !isEmpty(value) ||
      !isEmpty(startContent) ||
      isFocused ||
      // if input type number has invalid value then value becomes empty string
      (type === "number" && inputDOMRef.current?.validity.badInput === true));

  const hasLabel = !isEmpty(label) || !isEmpty(labelHelperContent);
  const hasStartContent = !isEmpty(startContent);
  const hasEndContent = !isEmpty(endContent);
  const hasValue = !isEmpty(value);

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

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        className: styles.base({
          className: cn(classNames?.base, props?.className),
        }),
        ref: baseRef,
        "data-focused": dataAttr(isFocused),
        "data-hovered": dataAttr(isHovered),
        "data-filled-within": dataAttr(isFilledWithin),
        "data-has-label": dataAttr(hasLabel),
        "data-has-start-content": dataAttr(hasStartContent),
        "data-has-end-content": dataAttr(hasEndContent),
        "data-disabled": dataAttr(isDisabled),
        "aria-disabled": dataAttr(isDisabled),
        "data-focus-visible": dataAttr(isFocusVisible),
        ...props,
      };
    },
    [
      styles,
      classNames?.base,
      baseRef,
      isFocused,
      isHovered,
      isFilledWithin,
      hasLabel,
      hasStartContent,
      hasEndContent,
      isDisabled,
      isFocusVisible,
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
        ...formLabelProps(),
        "data-slot": "label",
        className: styles.label({
          className: cn(classNames?.label, props?.className),
        }),
      };
    },
    [styles, classNames?.label],
  );

  const getLegendProps: PropGetter<ComponentProps<"legend">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "legend",
        className: styles.legend({
          className: cn(classNames?.legend, props?.className),
        }),
      };
    },
    [styles, classNames?.legend],
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
        disabled: isDisabled,
        ...restProps,
        ...props,
        ref: inputDOMRef,
      };
    },
    [
      styles,
      classNames?.input,
      className,
      value,
      handleInputChange,
      inputType,
      placeholder,
      isDisabled,
      restProps,
      inputDOMRef,
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

  const getClearButtonProps: PropGetter<Partial<IconButtonProps>> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "clear-button",
        className: styles.clearButton({
          className: cn(classNames?.clearButton, props?.className),
        }),
        onClick: handleClear,
      };
    },
    [styles, classNames?.clearButton, handleClear],
  );

  return {
    hasValue,
    Component,
    InputComponent,
    children,
    classNames,
    label,
    helperText,
    startContent,
    endContent,
    isClearable,
    variant,
    slots,
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
    getClearButtonProps,
    showClearButton,
    getLegendProps,
  };
};
