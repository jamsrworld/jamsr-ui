import { cn } from "@jamsr-ui/utils";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from "react";
import { Radio } from "./radio";
import { useRadioGroup } from "./use-radio-group";

export type RadioGroupItemProps = ComponentPropsWithoutRef<"input"> & {
  wrapperClassName?: string;
};

const RadioGroupItemInner = (
  props: RadioGroupItemProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const context = useRadioGroup();
  const {
    value,
    children,
    wrapperClassName,
    onChange: onChangeProp,
    ...restProps
  } = props;
  const {
    name,
    onChange,
    value: groupValue,
    defaultValue,
    ...contextRestProps
  } = context;
  const isChecked = value === groupValue;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onChangeProp?.(e);
  };
  return (
    <Radio
      ref={ref}
      type="radio"
      name={name}
      checked={isChecked}
      onChange={handleOnChange}
      value={value ?? defaultValue}
      classNames={{
        wrapper: cn("hover:bg-action-hover", wrapperClassName),
      }}
      {...contextRestProps}
      {...restProps}
    >
      {children}
    </Radio>
  );
};

export const RadioGroupItem = forwardRef(RadioGroupItemInner);
