"use client";

import { dataAttr } from "@jamsrui/utils";

import { useRHFContext } from "./rhf-context";
import { TextArea } from "../textarea";

export const RHFTextArea = (props: RHFTextArea.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <TextArea
      ref={ref}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFTextArea {
  export interface Props extends TextArea.Props {}
}
