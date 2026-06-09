"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { useHover } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import type { ComponentProps } from "react";

export const TextArea = (props: TextArea.Props) => {
  const { isHovered, ref } = useHover();
  const { onValueChange, value, defaultValue, ...restProps } = props;
  return (
    <InputPrimitive
      ref={ref}
      data-hovered={dataAttr(isHovered)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      render={<textarea {...restProps} />}
      value={value}
    />
  );
};

export namespace TextArea {
  export interface Props
    extends
      Omit<InputPrimitive.Props, keyof ComponentProps<"textarea">>,
      ComponentProps<"textarea"> {}
}
