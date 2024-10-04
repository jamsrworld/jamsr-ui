import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
  mergeProps,
  useDOMRef,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo, type ComponentProps } from "react";
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
  mask?: "number" | "percent" | "currency";
  isSecuredText?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  fullWidth?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid?: boolean;
  helperText?: string;
  precision?: number;
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

export const useInput = (props: UseInputProps) => {
  const {
    as,
    label,
    labelPlacement,
    labelHelperContent,
    className,
    classNames,
    size,
    mask,
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
    fullWidth,
    variant,
    helperText,
    precision = 2,
    baseRef,
    inputWrapperRef,
    children,
    ref,
    isRequired = false,
    isOptional = false,
    slotProps = {},
    ...restProps
  } = props;

  const Component = as ?? "div";
  const InputComponent = "input";
  const inputDOMRef = useDOMRef(ref);

  const styles = inputVariants({
    variant,
    size,
    isInvalid,
    labelPlacement,
    fullWidth,
    isRequired,
    isOptional,
  });

  const [value = "", setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const [showPassword, setShowPassword] = useControlledState({
    prop: propShowPassword,
    onChange: propSetShowPassword,
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { value: crrValue } = e.target;
      crrValue = String(crrValue);

      if (precision < 1) {
        const newValue = crrValue.replace(/\D/g, "");
        crrValue = newValue;
      } else if (
        mask === "number" ||
        mask === "currency" ||
        mask === "percent"
      ) {
        const regexString = `^\\$?\\d*\\.?\\d{0,${precision}}$`;
        const regex = new RegExp(regexString);

        if (!regex.test(crrValue)) {
          crrValue = value;
        } else {
          crrValue = crrValue.replace(/^\$/, "");
        }
      }
      onChange?.(e);
      setValue(crrValue);
    },
    [mask, onChange, precision, setValue, value],
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
          class: cn(classNames?.base, props?.className),
        }),
        ref: baseRef,
        ...props,
      };
    },
    [styles, classNames?.base, baseRef],
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

  const getLabelProps: PropGetter<ComponentProps<"label">> = useCallback(
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
        "data-slot": "inner-wrapper",
        className: styles.innerWrapper({
          class: cn(classNames?.innerWrapper, props?.className),
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

  const getInputWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ref: inputWrapperRef,
        ...props,
        "data-slot": "input-wrapper",
        ...mergeProps(slotProps.inputWrapper ?? {}, {
          className: styles.inputWrapper({
            class: cn(classNames?.inputWrapper, props?.className),
          }),
          onClick: handleFocusInput,
        }),
      };
    },
    [
      inputWrapperRef,
      styles,
      classNames?.inputWrapper,
      handleFocusInput,
      slotProps.inputWrapper,
    ],
  );

  const getStartContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "start-content",
        className: styles.startContent({
          class: cn(classNames?.startContent, props?.className),
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
          class: cn(classNames?.endContent, props?.className),
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
      const fValue = mask === "currency" ? `$${value}` : value;
      return {
        "data-slot": "input",
        className: styles.input({
          class: cn(classNames?.input, props?.className, className),
        }),
        value: fValue,
        onChange: handleInputChange,
        type: inputType,
        ...restProps,
        ...props,
        ref: inputDOMRef,
      };
    },
    [
      mask,
      value,
      styles,
      classNames?.input,
      className,
      handleInputChange,
      inputType,
      restProps,
      inputDOMRef,
    ],
  );

  const getNotationProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "notation",
        className: styles.notation({
          class: cn(classNames?.notation, props?.className),
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
    labelPlacement,
    isInvalid,
    isSecuredText,
    showPassword,
    hasNotation,
    mask,
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
  };
};
