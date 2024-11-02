import { useControlledState } from "@jamsr-ui/hooks";
import { dataAttr, type SlotsToClasses } from "@jamsr-ui/utils";
import { useId, type ChangeEvent, type ComponentProps } from "react";
import { CheckboxCheckIcon } from "./checkbox-check-icon";
import {
  checkbox,
  type CheckboxSlots,
  type CheckboxVariantProps,
} from "./style";

export type CheckboxProps = CheckboxVariantProps & {
  label?: React.ReactNode;
  labelProps?: ComponentProps<"label">;
  defaultChecked?: boolean;
  isChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  helperText?: string;
  className?: string;
  classNames?: SlotsToClasses<CheckboxSlots>;
  isReadonly?: boolean;
  isDisabled?: boolean;
  onBlur?: () => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const id = useId();
  const {
    isChecked: $checked,
    defaultChecked,
    label,
    labelProps,
    onCheckedChange,
    isInvalid,
    helperText,
    className,
    classNames,
    isDisabled = false,
    isReadonly = false,
    ...restProps
  } = props;

  const [checked = false, setChecked] = useControlledState(
    defaultChecked,
    $checked,
    onCheckedChange,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled || isReadonly) return;
    setChecked(e.target.checked);
  };

  const styles = checkbox({
    className,
    isInvalid,
  });

  return (
    <div
      data-component="checkbox"
      data-slot="base"
      data-checked={dataAttr(checked)}
      data-disabled={dataAttr(isDisabled)}
      data-invalid={dataAttr(isInvalid)}
      data-readonly={dataAttr(isReadonly)}
      className={styles.base({ className: classNames?.base })}
    >
      <div
        data-slot="wrapper"
        className={styles.wrapper({ className: classNames?.wrapper })}
      >
        <div
          data-slot="checkbox-wrapper"
          className={styles.checkboxWrapper({
            className: classNames?.checkboxWrapper,
          })}
        >
          <input
            id={id}
            type="checkbox"
            className={styles.checkbox({ className: classNames?.checkbox })}
            checked={checked}
            onChange={handleChange}
            readOnly={isReadonly}
            disabled={isDisabled || isReadonly}
            aria-disabled={dataAttr(isDisabled)}
            {...restProps}
          />
          <CheckboxCheckIcon isChecked={Boolean(checked)} />
        </div>
        <label
          className={styles.label({ className: classNames?.label })}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </label>
      </div>
      {helperText && (
        <div
          data-slot="helper-text"
          className={styles.helperText({
            className: classNames?.helperText,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
