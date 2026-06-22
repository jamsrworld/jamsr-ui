"use client";

import { useRHFContext } from "./rhf-context";
import { NumberField } from "../number-field";
import { dataAttr } from "../utils/attr";

export const RHFNumberField = (props: RHFNumberField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <NumberField
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      inputRef={ref}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFNumberField {
  export interface Props extends NumberField.Props {}
}
