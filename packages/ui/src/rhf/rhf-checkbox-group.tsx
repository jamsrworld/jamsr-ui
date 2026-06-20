"use client";

import { CheckboxGroup } from "../checkbox";
import { dataAttr } from "../utils";
import { useRHFContext } from "./rhf-context";

export const RHFCheckboxGroup = (props: RHFCheckboxGroup.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <CheckboxGroup
      ref={ref}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFCheckboxGroup {
  export interface Props extends CheckboxGroup.Props {}
}
