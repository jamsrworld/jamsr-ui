import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./select";

import type { VariantProps } from "tailwind-variants";

import type { selectStyles } from "./styles";

export const Select = Object.assign(SelectRoot, {
  Content: SelectContent,
  Icon: SelectIcon,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  Trigger: SelectTrigger,
  Value: SelectValue,
  ItemText: SelectItemText,
});

export namespace Select {
  export type Variants = VariantProps<typeof selectStyles>;
  export type Props<
    Value = unknown,
    Multiple extends boolean | undefined = false,
  > = SelectRoot.Props<Value, Multiple>;
}
