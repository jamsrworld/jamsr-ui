import {
  Checkbox as CheckboxRoot,
  CheckboxGroupRoot,
  CheckboxIndicator,
} from "./checkbox";

import type { VariantProps } from "tailwind-variants";

import type { CheckboxGroupRoot as CheckboxGroupRootNamespace } from "./checkbox";
import type { checkboxStyles } from "./styles";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export type Variants = VariantProps<typeof checkboxStyles>;
  export interface Props extends CheckboxRoot.Props {}
}

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {});

export namespace CheckboxGroup {
  export interface Props extends CheckboxGroupRootNamespace.Props {}
}
