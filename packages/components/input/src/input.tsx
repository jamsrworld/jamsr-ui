"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { useHover } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

export const Input = (props: Input.Props) => {
  const { isHovered, ref } = useHover();
  return (
    <InputPrimitive ref={ref} data-hovered={dataAttr(isHovered)} {...props} />
  );
};

export namespace Input {
  export interface Props extends InputPrimitive.Props {}
}
