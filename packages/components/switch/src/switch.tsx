import { useControlledState } from "@jamsr-ui/hooks";
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
};

export type SwitchProps = VariantProps<typeof switchVariants> & Props;

const SwitchInner = (props: SwitchProps, ref: ForwardedRef<HTMLDivElement>) => {
  const id = useId();

  const {
    checked: propChecked,
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
    ...restProps
  } = props;

  const [checked, setChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: propChecked,
  });

  const { thumb, wrapper } = switchVariants({
    checked,
    disabled,
    color,
    size,
  });

  const onClick = () => setChecked((prev) => !prev);

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
    >
      <input
        type="checked"
        className="sr-only"
        aria-hidden="true"
        {...restProps}
      />
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
      >
        <m.div
          data-slot="thumb"
          variants={variants}
          layoutId={id}
          className={thumb()}
        />
      </m.button>
      <div className="grid gap-1">
        <Typography className="font-medium">{label}</Typography>
        <Typography className="text-foreground-500 text-xs">
          {typeof description === "function"
            ? description(checked)
            : description}
        </Typography>
      </div>
    </div>
  );
};

export const Switch = forwardRef(SwitchInner);
