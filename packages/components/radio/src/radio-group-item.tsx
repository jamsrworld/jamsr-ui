import type { UIProps } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import type { RadioProps } from "./radio";
import { Radio } from "./radio";
import { useRadioGroup } from "./use-radio-group";

export type RadioGroupItemProps<T extends React.ElementType = "input"> =
  RadioProps<T> & {
    wrapperClassName?: string;
  };

export const RadioGroupItem = <T extends React.ElementType = "input">(
  props: RadioGroupItemProps<T>,
) => {
  const context = useRadioGroup();
  const {
    value,
    children,
    wrapperClassName,
    onChange: onChangeProp,
    ...restProps
  } = props as UIProps<"input"> & {
    wrapperClassName?: string;
  };

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
