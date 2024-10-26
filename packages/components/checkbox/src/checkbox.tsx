import { useControlledState } from "@jamsr-ui/hooks";
import {
  forwardRef,
  useId,
  type ChangeEvent,
  type ComponentProps,
  type ForwardedRef,
} from "react";
import { CheckboxCheckIcon } from "./checkbox-check-icon";
import { Label, type CheckboxLabelProps } from "./label";

export type CheckboxProps = ComponentProps<"input"> & {
  label: React.ReactNode;
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
    labelProps,
    onCheckedChange,
    ...restProps
  } = props;

  const [checked = false, setChecked] = useControlledState(
    defaultChecked,
    propChecked,
    onCheckedChange,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <div
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
        <CheckboxCheckIcon isChecked={Boolean(checked)} />
      </div>
      <Label id={id} {...labelProps}>
        {label}
      </Label>
    </div>
  );
};

export const Checkbox = forwardRef(CheckboxInner);
