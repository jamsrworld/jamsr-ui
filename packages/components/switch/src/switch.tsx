import {
  useControlledState,
  useFocus,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIStyle } from "@jamsr-ui/styles";
import { dataAttr, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import { m, type Variants } from "framer-motion";
import { useId } from "react";
import {
  switchVariants,
  type SwitchSlots,
  type SwitchVariantProps,
} from "./styles";

const variants: Variants = {
  initial: {},
  tapped: {
    width: 30,
  },
};

type Props = {
  label?: string;
  description?: string | ((checked: boolean) => string);
  checked?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  labelPlacement?: "top" | "bottom" | "start" | "end";
  onBlur?: () => void;
  isInvalid?: boolean;
  helperText?: string;
  className?: string;
  classNames?: SlotsToClasses<SwitchSlots>;
  isDisabled?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  isReadonly?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
};

export type SwitchProps = SwitchVariantProps & Props;

export const Switch = ($props: SwitchProps) => {
  const { switch: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const id = useId();
  const {
    checked,
    isChecked: $isChecked,
    defaultChecked,
    onCheckedChange,
    label,
    description,
    labelPlacement,
    isDisabled: propIsDisabled,
    color,
    onBlur,
    size,
    isInvalid,
    helperText,
    className,
    classNames,
    disabled,
    ref,
    readonly,
    isReadonly: $isReadonly,
    ...restProps
  } = props;

  const [isChecked, setChecked] = useControlledState(
    defaultChecked,
    $isChecked ?? checked,
    onCheckedChange,
  );
  const isReadonly = readonly ?? $isReadonly;
  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: disabled ?? propIsDisabled,
  });
  const isInteractive = !isDisabled && !isReadonly;
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled: isInteractive,
  });
  const { isFocused, ref: focusRef } = useFocus({
    isDisabled,
  });
  const refs = useMergeRefs([ref, disableRef, hoverRef, focusRef]);
  const styles = switchVariants({
    color,
    size,
    labelPlacement,
    className,
    isInvalid,
  });
  const onClick = () => setChecked((prev) => !prev);
  const hasContent = label ?? description;
  return (
    <div
      data-component="switch"
      data-slot="base"
      className={styles.base({ className: classNames?.base })}
      onBlur={onBlur}
      data-disabled={dataAttr(isDisabled)}
      aria-disabled={dataAttr(isDisabled)}
      data-hovered={dataAttr(isHovered)}
      data-focused={dataAttr(isFocused)}
      data-interactive={dataAttr(isInteractive)}
      data-checked={dataAttr(isChecked)}
    >
      <div
        data-slot="main-wrapper"
        className={styles.mainWrapper({ className: classNames?.mainWrapper })}
      >
        {hasContent && (
          <div
            data-slot="content"
            className={styles.content({ className: classNames?.content })}
          >
            {label && (
              <label
                htmlFor={id}
                data-slot="label"
                className={styles.label({ className: classNames?.label })}
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
                {typeof description === "function"
                  ? description(isChecked)
                  : description}
              </div>
            )}
          </div>
        )}
        <div
          data-slot="switch-wrapper"
          className={styles.switchWrapper({
            className: classNames?.switchWrapper,
          })}
        >
          <input
            type="checked"
            className="hidden"
            aria-hidden="true"
            ref={refs}
            {...restProps}
          />
          <m.button
            data-slot="switch"
            type="button"
            data-interactive={dataAttr(isInteractive)}
            className={styles.switch({ className: classNames?.switch })}
            {...(isInteractive && {
              onClick,
              layout: true,
              initial: "initial",
              whileTap: "tapped",
              animate: "initial",
            })}
            disabled={!isInteractive}
            id={id}
          >
            <m.div
              data-slot="thumb"
              variants={variants}
              layoutId={id}
              className={styles.thumb({ className: classNames?.thumb })}
            />
          </m.button>
        </div>
      </div>
      {helperText && (
        <div
          data-slot="helper-text"
          className={styles.helperText({ className: classNames?.helperText })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
