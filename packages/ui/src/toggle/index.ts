import { Toggle as ToggleRoot, ToggleGroupRoot } from "./toggle";

import type { VariantProps } from "tailwind-variants";

import type { toggleStyles } from "./styles";

export const Toggle = Object.assign(ToggleRoot, {});
export const ToggleGroup = Object.assign(ToggleGroupRoot, {});

export namespace Toggle {
  export type Variants = VariantProps<typeof toggleStyles>;
  export interface Props extends ToggleRoot.Props {}
}

export namespace ToggleGroup {
  export interface Props extends React.ComponentProps<typeof ToggleGroupRoot> {}
  export type Variants = {
    multiple?: boolean;
  };
}
