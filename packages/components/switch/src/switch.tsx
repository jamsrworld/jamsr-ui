import {
  useControlledState,
  useFocus,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { MotionButton, MotionDiv } from "@jamsr-ui/motion";
import { useUIStyle } from "@jamsr-ui/styles";
import { Typography } from "@jamsr-ui/typography";
import { dataAttr, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import { type Variants } from "framer-motion";
import { useId } from "react";
import {
  switchVariants,
  type SwitchSlots,
  type SwitchVariantProps,
} from "./style";

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
  ref?: React.RefObject<HTMLInputElement>;
};

export type SwitchProps = SwitchVariantProps & Props;

export const Switch = ($props: SwitchProps) => {
  const { switch: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const id = useId();
  const {
    checked: $checked,
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
    ...restProps
  } = props;

  const [checked, setChecked] = useControlledState(
    defaultChecked,
    $checked,
    onCheckedChange,
  );
  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: disabled ?? propIsDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isFocused, ref: focusRef } = useFocus({
    isDisabled,
  });
  const refs = useMergeRefs([ref, disableRef, hoverRef, focusRef]);
  const styles = switchVariants({
    checked,
    color,
    size,
    labelPlacement,
    className,
    isInvalid,
  });
  const onClick = () => setChecked((prev) => !prev);
  return (
    <div
      data-component="switch"
      className={styles.base({ className: classNames?.base })}
      onBlur={onBlur}
      data-disabled={dataAttr(isDisabled)}
      aria-disabled={dataAttr(isDisabled)}
      data-hovered={dataAttr(isHovered)}
      data-focused={dataAttr(isFocused)}
    >
      <div
        data-slot="main-wrapper"
        className={styles.mainWrapper({ className: classNames?.mainWrapper })}
      >
        <label
          htmlFor={id}
          data-slot="label"
          className={styles.label({ className: classNames?.label })}
        >
          <Typography
            as="p"
            data-slot="label-text"
            className={styles.labelText({ className: classNames?.labelText })}
          >
            {label}
          </Typography>
          {description && (
            <Typography
              as="p"
              data-slot="description"
              className={styles.description({
                className: classNames?.description,
              })}
            >
              {typeof description === "function"
                ? description(checked)
                : description}
            </Typography>
          )}
        </label>
        <div
          data-slot="switch-wrapper"
          className={styles.switchWrapper({
            className: classNames?.switchWrapper,
          })}
        >
          <input
            type="checked"
            className="sr-only"
            aria-hidden="true"
            ref={refs}
            {...restProps}
          />
          <MotionButton
            data-slot="switch"
            type="button"
            className={styles.switch({ className: classNames?.switch })}
            onClick={onClick}
            layout
            initial="initial"
            whileTap="tapped"
            animate="initial"
            disabled={isDisabled}
            id={id}
          >
            <MotionDiv
              data-slot="thumb"
              variants={variants}
              layoutId={id}
              className={styles.thumb({ className: classNames?.thumb })}
            />
          </MotionButton>
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
