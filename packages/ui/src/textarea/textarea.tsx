"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { mergeProps } from "react-aria/mergeProps";
import { useHover } from "react-aria/useHover";

import { inputStyles } from "../input/styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

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
  const styles = inputStyles({
    variant,
    size,
    radius,
    isInvalid,
    className: cn(className),
  });
  const { hoverProps, isHovered } = useHover({ isDisabled: props.disabled });
  return (
    <InputPrimitive
      className={styles}
      data-hovered={dataAttr(isHovered)}
      data-invalid={dataAttr(isInvalid)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      render={<textarea {...mergeProps(hoverProps, restProps)} />}
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
