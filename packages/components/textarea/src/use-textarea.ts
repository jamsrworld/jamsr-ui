import {
  useControlledState,
  useFocus,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { inputVariants } from "@jamsr-ui/input";
import {
  cn,
  dataAttr,
  deepMergeProps,
  formLabelProps,
  isEmpty,
  mapPropsVariants,
  mergeGlobalProps,
  useDOMRef,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, type ComponentProps } from "react";

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
  ref?: React.Ref<HTMLTextAreaElement>;
  isDisabled?: boolean;
  isFormControl?: boolean;
} & TextareaVariantProps;

export type UseTextareaProps = UIProps<"textarea", Props>;

export const useTextarea = ($props: UseTextareaProps) => {
  const { textarea: _globalProps = {}, globalConfig } = useUIStyle();
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
    defaultValue,
    value: propValue,
    onValueChange,
    startContent,
    endContent,
    onChange,
    helperText,
    placeholder,
    baseRef,
    inputWrapperRef,
    ref,
    disabled = false,
    isDisabled: propIsDisabled = false,
    isFormControl = false,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const TextareaComponent = "textarea";
  const { variant = "standard", isInvalid } = variantProps;

  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLTextAreaElement>({
    isDisabled: propIsDisabled || disabled,
    isFormControl,
  });
  const { isFocused, ref: focusRef } = useFocus<HTMLTextAreaElement>({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover<HTMLTextAreaElement>({
    isDisabled,
  });
  const refs = useMergeRefs([ref, disableRef, focusRef, hoverRef]);
  const inputDOMRef = useDOMRef<HTMLTextAreaElement>(refs);

  const styles = inputVariants({
    ...variantProps,
    isTextarea: true,
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
        "aria-disabled": dataAttr(isDisabled),
        "data-disabled": dataAttr(isDisabled),
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
        ref: inputDOMRef,
        disabled: isDisabled,
        "aria-disabled": dataAttr(isDisabled),
        ...restProps,
        ...props,
      };
    },
    [
      styles,
      classNames?.input,
      className,
      value,
      placeholder,
      handleTextareaChange,
      inputDOMRef,
      isDisabled,
      restProps,
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
