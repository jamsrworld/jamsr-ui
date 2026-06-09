import type { VariantProps } from "tailwind-variants";
import { checkboxStyles } from "./styles";
import {
  Checkbox as CheckboxRoot,
  CheckboxGroupRoot,
  CheckboxIndicator,
} from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export type Variants = VariantProps<typeof checkboxStyles>;
  export interface Props extends CheckboxRoot.Props {}
}

export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {});
