import { useControlledState } from "@jamsr-ui/hooks";
import {
  forwardRef,
  useId,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from "react";
import { CheckboxCheckIcon } from "./checkbox-check-icon";
import { Label, type CheckboxLabelProps } from "./label";

export type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  label: React.ReactNode;
  indeterminate?: boolean;
  labelProps?: Omit<CheckboxLabelProps, "id">;
  onCheckedChange: (checked: boolean) => void;
};

const CheckboxInner = (
  props: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const id = useId();
  const {
    checked: propChecked,
    onChange,
    defaultChecked,
    label,
    indeterminate,
    labelProps,
    onCheckedChange,
    ...restProps
  } = props;

  const [checked = false, setChecked] = useControlledState({
    prop: propChecked,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2"
      data-component="checkbox"
      data-slot="base"
    >
      <div className="relative flex size-max items-center ">
        <input
          id={id}
          type="checkbox"
          className="relative size-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-500 checked:border-blue-500 checked:bg-blue-500"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...restProps}
        />
        <CheckboxCheckIcon
          indeterminate={indeterminate}
          isChecked={Boolean(checked)}
        />
      </div>
      <Label className="cursor-pointer" id={id} {...labelProps}>
        {label}
      </Label>
    </button>
  );
};

export const Checkbox = forwardRef(CheckboxInner);
