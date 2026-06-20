"use client";

import { InputGroup } from "../input-group";
import { useRHFContext } from "./rhf-context";
import { dataAttr } from "../utils/attr";

export const RHFInputGroupTextArea = (props: RHFInputGroupTextArea.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <InputGroup.TextArea
      ref={ref}
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFInputGroupTextArea {
  export interface Props extends InputGroup.TextArea {}
}
