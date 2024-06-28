import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
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
  label: string | null;
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
    ...restProps
  } = props;
  const Component = as ?? "div";
  const InputComponent = "input";

  const slots = inputVariants({
    variant,
    size,
    isInvalid,
    labelPlacement,
    fullWidth,
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

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "base",
        className: slots.base({
          class: cn(classNames?.base, props?.className),
        }),
        ref: baseRef,
        ...props,
      };
    },
    [slots, classNames?.base, baseRef],
  );

  const getLabelWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label-wrapper",
        className: slots.labelWrapper({
          class: cn(classNames?.labelWrapper, props?.className),
        }),
      };
    },
    [slots, classNames?.labelWrapper],
  );

  const getLabelProps: PropGetter<ComponentProps<"label">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "label",
        className: slots.label({
          class: cn(classNames?.label, props?.className),
        }),
      };
    },
    [slots, classNames?.label],
  );

  const getInnerWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "inner-wrapper",
        className: slots.innerWrapper({
          class: cn(classNames?.innerWrapper, props?.className),
        }),
      };
    },
    [slots, classNames?.innerWrapper],
  );

  const getHelperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "helper",
        className: slots.helper({
          class: cn(classNames?.helper, props?.className),
        }),
      };
    },
    [slots, classNames?.helper],
  );

  const getMainWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "main-wrapper",
        className: slots.mainWrapper({
          class: cn(classNames?.mainWrapper, props?.className),
        }),
      };
    },
    [slots, classNames?.mainWrapper],
  );

  const getInputWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "input-wrapper",
        className: slots.inputWrapper({
          class: cn(classNames?.inputWrapper, props?.className),
        }),
      };
    },
    [slots, classNames?.inputWrapper],
  );

  const getStartContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "start-content",
        className: slots.startContent({
          class: cn(classNames?.startContent, props?.className),
        }),
      };
    },
    [slots, classNames?.startContent],
  );

  const getEndContentProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        ...props,
        "data-slot": "end-content",
        className: slots.endContent({
          class: cn(classNames?.endContent, props?.className),
        }),
      };
    },
    [slots, classNames?.endContent],
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
        className: slots.input({
          class: cn(classNames?.input, props?.className, className),
        }),
        value: fValue,
        onChange: handleInputChange,
        type: inputType,
        ...restProps,
        ...props,
      };
    },
    [
      mask,
      value,
      slots,
      classNames?.input,
      className,
      handleInputChange,
      inputType,
      restProps,
    ],
  );

  return {
    Component,
    InputComponent,
    classNames,
    label,
    helperText,
    startContent,
    endContent,
    labelPlacement,
    isInvalid,
    isSecuredText,
    showPassword,
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
  };
};
