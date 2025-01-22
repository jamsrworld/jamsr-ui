import {
  useControlledState,
  useFocus,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/styles";
import {
  dataAttr,
  deepMergeProps,
  formLabelProps,
  mapPropsVariants,
  mergeGlobalProps,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { m } from "framer-motion";
import { useId, type ChangeEvent, type ComponentProps } from "react";
import { CheckboxCheckIcon } from "./checkbox-check-icon";
import {
  checkbox,
  type CheckboxSlots,
  type CheckboxVariantProps,
} from "./styles";

export type CheckboxProps = CheckboxVariantProps & {
  label?: React.ReactNode;
  labelProps?: ComponentProps<"label">;
  description?: React.ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  isChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  helperText?: string;
  className?: string;
  classNames?: SlotsToClasses<CheckboxSlots>;
  isReadonly?: boolean;
  isDisabled?: boolean;
  disabled?: boolean;
  onBlur?: () => void;
  isFormControl?: boolean;
};

export const Checkbox = ($props: CheckboxProps) => {
  const { checkbox: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    checkbox.variantKeys,
  );

  const id = useId();
  const {
    isChecked: $checked,
    defaultChecked,
    checked: propChecked,
    label,
    labelProps,
    onCheckedChange,
    helperText,
    className,
    classNames,
    isDisabled: propIsDisabled = false,
    isReadonly = false,
    disabled,
    onBlur,
    description,
    isFormControl = false,
    ...restProps
  } = props;

  const [checked = false, setChecked] = useControlledState(
    defaultChecked ?? propChecked,
    $checked,
    onCheckedChange,
  );

  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled ?? disabled,
    isFormControl,
  });
  const isInteractive = !isDisabled && !isReadonly;
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled: !isInteractive,
  });
  const { isFocused, ref: focusRef } = useFocus({
    isDisabled,
  });
  const refs = useMergeRefs([hoverRef, focusRef, disableRef]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isInteractive) return;
    setChecked(e.target.checked);
  };

  const styles = checkbox({
    className,
    ...variantProps,
  });

  const hasContent = !!label || !!description;
  return (
    <div
      data-component="checkbox"
      data-slot="base"
      data-checked={dataAttr(checked)}
      data-disabled={dataAttr(isDisabled)}
      data-invalid={dataAttr(variantProps.isInvalid)}
      data-readonly={dataAttr(isReadonly)}
      data-hovered={dataAttr(isHovered)}
      aria-disabled={dataAttr(isDisabled)}
      data-focused={dataAttr(isFocused)}
      data-interactive={dataAttr(isInteractive)}
      className={styles.base({ className: classNames?.base })}
      onBlur={onBlur}
    >
      <div
        data-slot="wrapper"
        className={styles.wrapper({ className: classNames?.wrapper })}
      >
        <m.button
          type="button"
          tabIndex={-1}
          data-slot="checkbox-wrapper"
          className={styles.trigger({
            className: classNames?.trigger,
          })}
          disabled={!isInteractive}
          {...(isInteractive && {
            whileTap: { scale: 0.95 },
            transition: {
              type: "spring",
              bounce: 0,
              stiffness: 300,
              damping: 20,
              mass: 0.5,
            },
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
        </m.button>
        {hasContent && (
          <div
            data-slot="content"
            className={styles.content({
              className: classNames?.content,
            })}
          >
            {label && (
              <label
                data-slot="label"
                className={styles.label({ className: classNames?.label })}
                htmlFor={id}
                {...formLabelProps()}
                {...labelProps}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                data-slot="description"
                className={styles.description({
                  className: classNames?.description,
                })}
              >
                {description}
              </div>
            )}
          </div>
        )}
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
