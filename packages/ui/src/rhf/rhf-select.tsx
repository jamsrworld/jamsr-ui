"use client";

import { Select } from "../select";
import { useRHFContext } from "./rhf-context";
import { dataAttr } from "../utils/attr";

export const RHFSelect = <Value, Multiple extends boolean | undefined = false>(
  props: RHFSelect.Props<Value, Multiple>,
) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Select
      data-invalid={dataAttr(invalid)}
      disabled={disabled}
      inputRef={ref}
      isInvalid={invalid}
      name={name}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFSelect {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = Select.Props<Value, Multiple>;
}
