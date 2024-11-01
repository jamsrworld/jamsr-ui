import { useControlledState2 } from "@jamsr-ui/hooks/src/use-controlled-state";
import { Typography } from "@jamsr-ui/typography";
import { cn, type VariantProps } from "@jamsr-ui/utils";
import { m, type Variants } from "framer-motion";
import {
  forwardRef,
  useId,
  type ForwardedRef,
  type SetStateAction,
} from "react";
import { switchVariants } from "./style";

const variants: Variants = {
  initial: {},
  tapped: {
    width: 30,
  },
};

type Props = {
  onChange?: (value: SetStateAction<boolean>) => void;
  label?: string;
  description?: string | ((checked: boolean) => string);
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  labelPlacement?: "top" | "bottom" | "start" | "end";
  onBlur?: () => void;
  isInvalid?: boolean;
  helperText?: string;
};

export type SwitchProps = VariantProps<typeof switchVariants> & Props;

const SwitchInner = (props: SwitchProps, ref: ForwardedRef<HTMLDivElement>) => {
  const id = useId();
  const {
    checked: $checked,
    defaultChecked,
    onCheckedChange,
    label,
    description,
    labelPlacement = "end",
    disabled,
    color,
    onBlur,
    onChange,
    size,
    isInvalid,
    helperText,
    ...restProps
  } = props;

  // const [checked, setChecked] = useControlledState(
  //   defaultChecked,
  //   $checked,
  //   onCheckedChange,
  // );

  const [checked, setChecked] = useControlledState2({
    defaultProp: defaultChecked,
    prop: $checked,
    onChange: onCheckedChange,
  });
  const { thumb, wrapper } = switchVariants({
    checked,
    disabled,
    color,
    size,
  });

  const onClick = () => setChecked((prev) => !prev);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div
      data-component="switch"
      ref={ref}
      className={cn("flex items-center justify-between gap-2", {
        "flex-row": labelPlacement === "start",
        "flex-row-reverse": labelPlacement === "end",
        "flex-col": labelPlacement === "top",
        "flex-col-reverse": labelPlacement === "bottom",
      })}
      onBlur={onBlur}
    >
      <input
        type="checked"
        className="sr-only"
        aria-hidden="true"
        disabled={disabled}
        {...restProps}
      />
      {/* @ts-expect-error FramerError */}
      <m.button
        data-slot="wrapper"
        type="button"
        className={wrapper()}
        onClick={onClick}
        layout
        initial="initial"
        whileTap="tapped"
        animate="initial"
        disabled={disabled}
        id={id}
        onKeyPress={handleKeyPress}
      >
        {/* @ts-expect-error FramerError */}
        <m.div
          data-slot="thumb"
          variants={variants}
          layoutId={id}
          className={thumb()}
        />
      </m.button>
      <label
        htmlFor={id}
        className="grid grow cursor-pointer select-none gap-1"
      >
        <Typography as="p" className="font-medium">
          {label}
        </Typography>
        <Typography as="p" className="text-xs text-foreground-500">
          {typeof description === "function"
            ? description(checked)
            : description}
        </Typography>
      </label>
      {helperText && <div>{helperText}</div>}
    </div>
  );
};

export const Switch = forwardRef(SwitchInner);
