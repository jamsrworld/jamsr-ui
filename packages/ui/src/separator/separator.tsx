"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";

import { separatorStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type SeparatorVariants = VariantProps<typeof separatorStyles>;

export const Separator = (props: Separator.Props) => {
  const { orientation, variant, className, ...restProps } = props;
  const styles = separatorStyles({
    orientation,
    variant,
    className: cn(className),
  });
  return <SeparatorPrimitive {...restProps} className={styles} />;
};

export namespace Separator {
  export interface Props extends SeparatorPrimitive.Props, SeparatorVariants {}
}
