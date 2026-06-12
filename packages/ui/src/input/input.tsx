"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { mergeProps } from "react-aria/mergeProps";
import { useHover } from "react-aria/useHover";

import { inputStyles } from "./styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type InputVariants = VariantProps<typeof inputStyles>;

export const Input = (props: Input.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const { isHovered, hoverProps } = useHover({ isDisabled: props.disabled });
  const styles = inputStyles({
    variant,
    size,
    radius,
    isInvalid,
    className: cn(className),
  });
  return (
    <InputPrimitive
      className={styles}
      data-hovered={dataAttr(isHovered)}
      data-invalid={dataAttr(isInvalid)}
      {...mergeProps(hoverProps, restProps)}
    />
  );
};

export namespace Input {
  export interface Props
    extends Omit<InputPrimitive.Props, "size">, InputVariants {}
}
