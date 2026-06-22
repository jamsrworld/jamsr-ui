"use client";

import { useRender } from "@base-ui/react/use-render";

import { kbdStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type KbdVariants = VariantProps<typeof kbdStyles>;

export const Kbd = (props: Kbd.Props) => {
  const { size, className, keys: _keys, render, ...rest } = props;
  const styles = kbdStyles({ size });
  const renderElement = useRender({
    defaultTagName: "kbd",
    props: {
      ...rest,
      className: cn(styles, className),
    },
    render,
  });
  return renderElement;
};

export namespace Kbd {
  export interface Props extends useRender.ComponentProps<"kbd">, KbdVariants {
    keys?: string[];
  }
}
