import { useControlledState } from "@jamsr-ui/hooks";
import {
  cn,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, type ComponentProps } from "react";
import {
  textareaVariants,
  type TextareaSlots,
  type TextareaVariantProps,
} from "./style";

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

  const slots = textareaVariants({
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
        className: slots.base({
          class: cn(classNames?.base, props?.className),
        }),
        ...props,
      };
    },
    [slots, classNames?.base],
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

  const getLabelProps: PropGetter<ComponentProps<"div">> = useCallback(
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

  const getTextareaWrapperProps: PropGetter<ComponentProps<"div">> =
    useCallback(
      (props) => {
        return {
          ...props,
          ref,
          "data-slot": "textarea-wrapper",
          className: slots.textareaWrapper({
            class: cn(classNames?.textareaWrapper, props?.className),
          }),
        };
      },
      [ref, slots, classNames?.textareaWrapper],
    );

  const getTextareaProps: PropGetter<ComponentProps<"textarea">> = useCallback(
    (props) => {
      return {
        "data-slot": "textarea",
        className: slots.textarea({
          class: cn(classNames?.textarea, props?.className, className),
        }),
        value: value,
        onChange: handleTextareaChange,
        ...restProps,
        ...props,
      };
    },
    [
      value,
      slots,
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
