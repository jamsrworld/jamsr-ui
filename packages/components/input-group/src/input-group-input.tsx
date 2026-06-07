"use client";

import { Input as InputPrimitive } from "@jamsrui/input";

export const InputGroupInput = (props: InputGroupInput.Props) => {
  // const { getInputProps } = useInputGroupContext();
  return <InputPrimitive {...props} />;
};

export namespace InputGroupInput {
  export interface Props extends InputPrimitive.Props {}
}
