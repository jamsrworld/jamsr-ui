"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { useHover } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";
import { cn } from "tailwind-variants";

import { inputStyles } from "../input/styles";

import type { ComponentProps } from "react";

import type { Input } from "../input";

export const TextArea = (props: TextArea.Props) => {
  const {
    variant,
    size,
    radius,
    isInvalid,
    className,
    defaultValue,
    onValueChange,
    value,
    ...restProps
  } = props;
  const { isHovered, ref } = useHover();
  const styles = inputStyles({
    variant,
    size,
    radius,
    isInvalid,
    className: cn(className),
  });
  return (
    <InputPrimitive
      ref={ref}
      className={styles}
      data-hovered={dataAttr(isHovered)}
      data-invalid={dataAttr(isInvalid)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      render={<textarea {...restProps} />}
      value={value}
    />
  );
};

export namespace TextArea {
  export interface Props
    extends
      Omit<InputPrimitive.Props, keyof ComponentProps<"textarea"> | "size">,
      ComponentProps<"textarea">,
      Input.Variants {}
}
