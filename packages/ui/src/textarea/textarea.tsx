"use client";

import { TextArea as TextAreaUI } from "@jamsrui/react";
import { dataAttr } from "@jamsrui/utils";
import { cn } from "tailwind-variants";

import { inputStyles } from "../input/styles";

import type { Input } from "../input";

export const TextArea = (props: TextArea.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const styles = inputStyles({
    variant,
    size,
    radius,
    isInvalid,
    className: cn(className),
  });
  return (
    <TextAreaUI
      data-invalid={dataAttr(isInvalid)}
      {...restProps}
      className={styles}
    />
  );
};

export namespace TextArea {
  export interface Props
    extends Omit<TextAreaUI.Props, "size">, Input.Variants {}
}
