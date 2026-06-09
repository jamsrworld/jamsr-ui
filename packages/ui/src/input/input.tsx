"use client";

import { Input as InputPrimitive } from "@jamsrui/react";
import { dataAttr } from "@jamsrui/utils";
import { cn } from "tailwind-variants";

import { inputStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type InputVariants = VariantProps<typeof inputStyles>;

export const Input = (props: Input.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
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
      data-invalid={dataAttr(isInvalid)}
      {...restProps}
    />
  );
};

export namespace Input {
  export interface Props
    extends Omit<InputPrimitive.Props, "size">, InputVariants {}
}
