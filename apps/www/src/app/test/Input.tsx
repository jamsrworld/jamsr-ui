"use client";

import { useIsDisabled } from "@jamsr-ui/hooks";
import { type ComponentProps } from "react";

export const TestInput = (props: ComponentProps<"input">) => {
  const { ref, isDisabled } = useIsDisabled<HTMLInputElement>({
    isDisabled: props.disabled,
  });
  console.log("isDisabled:->", isDisabled);
  return (
    <input
      ref={ref}
      name="hello"
      className="bg-red-50 disabled:bg-blue-50"
      {...props}
    />
  );
};
