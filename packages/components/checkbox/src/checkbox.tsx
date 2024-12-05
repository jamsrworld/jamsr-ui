import {
  useControlledState,
  useFocus,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { MotionButton } from "@jamsr-ui/motion";
import { useUIStyle } from "@jamsr-ui/styles";
import { dataAttr, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
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
  disabled?: boolean;
  onBlur?: () => void;
};

export const Checkbox = ($props: CheckboxProps) => {
  const { checkbox: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
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
    isDisabled: propIsDisabled = false,
    isReadonly = false,
    disabled,
    onBlur,
    ...restProps
  } = props;

  const [checked = false, setChecked] = useControlledState(
    defaultChecked,
    $checked,
    onCheckedChange,
  );

  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled ?? disabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isFocused, ref: focusRef } = useFocus({
    isDisabled,
  });
  const refs = useMergeRefs([hoverRef, focusRef, disableRef]);
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
      data-hovered={dataAttr(isHovered)}
      aria-disabled={dataAttr(isDisabled)}
      data-focused={dataAttr(isFocused)}
      className={styles.base({ className: classNames?.base })}
    >
      <div
        data-slot="wrapper"
        className={styles.wrapper({ className: classNames?.wrapper })}
      >
        <MotionButton
          data-slot="checkbox-wrapper"
          className={styles.trigger({
            className: classNames?.trigger,
          })}
          disabled={isDisabled}
          {...(!isDisabled && {
            whileTap: { scale: 0.95 },
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
            ref={refs}
            {...restProps}
          />
          <CheckboxCheckIcon isChecked={Boolean(checked)} />
        </MotionButton>
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
