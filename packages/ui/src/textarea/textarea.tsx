"use client";

import { Textarea as TextareaUI } from "@jamsrui/react";

import { inputStyles } from "../input/styles";

import type { Input } from "../input";

export const Textarea = (props: Textarea.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const styles = inputStyles({ variant, size, radius, isInvalid, className });
  return <TextareaUI {...restProps} className={styles} />;
};

export namespace Textarea {
  export interface Props extends TextareaUI.Props, Input.Variants {}
}
