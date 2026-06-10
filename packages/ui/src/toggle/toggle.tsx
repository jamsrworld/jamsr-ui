import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";

import { toggleStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type ToggleVariants = VariantProps<typeof toggleStyles>;

export const Toggle = (props: Toggle.Props) => {
  const { size, variant, className, ...rest } = props;
  return (
    <TogglePrimitive
      {...rest}
      className={cn(toggleStyles({ size, variant }), className)}
    />
  );
};

export namespace Toggle {
  export interface Props extends TogglePrimitive.Props, ToggleVariants {}
}

export const ToggleGroupRoot = (props: ToggleGroupPrimitive.Props) => {
  const { className, ...rest } = props;
  return (
    <ToggleGroupPrimitive
      {...rest}
      className={cn(
        "flex gap-px rounded-md border border-border bg-surface p-0.5",
        className,
      )}
    />
  );
};
