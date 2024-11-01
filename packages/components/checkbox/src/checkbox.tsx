import { useControlledState } from "@jamsr-ui/hooks";
import { useId, type ChangeEvent, type ComponentProps } from "react";
import { CheckboxCheckIcon } from "./checkbox-check-icon";
import { Label, type CheckboxLabelProps } from "./label";

export type CheckboxProps = ComponentProps<"input"> & {
  label?: React.ReactNode;
  labelProps?: Omit<CheckboxLabelProps, "id">;
  onCheckedChange: (checked: boolean) => void;
  isInvalid?: boolean;
  helperText?: string;
};

export const Checkbox = (props: CheckboxProps) => {
  const id = useId();
  const {
    checked: propChecked,
    onChange,
    defaultChecked,
    label,
    labelProps,
    onCheckedChange,
    isInvalid,
    helperText,
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
          checked={checked}
          onChange={handleChange}
          {...restProps}
        />
        <CheckboxCheckIcon isChecked={Boolean(checked)} />
      </div>
      <Label id={id} {...labelProps}>
        {label}
      </Label>
      {helperText && <div>{helperText}</div>}
    </div>
  );
};
