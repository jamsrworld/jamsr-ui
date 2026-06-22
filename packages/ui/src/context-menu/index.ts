import {
  ContextMenu as ContextMenuRoot,
  ContextMenuArrow,
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemIndicator,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRadioItemIndicator,
  ContextMenuSeparator,
  ContextMenuSubmenuContent,
  ContextMenuSubmenuIndicator,
  ContextMenuSubmenuRoot,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from "./context-menu";

import type { VariantProps } from "tailwind-variants";

import type { contextMenuStyles } from "./styles";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  CheckboxItemIndicator: ContextMenuCheckboxItemIndicator,
  RadioItem: ContextMenuRadioItem,
  RadioItemIndicator: ContextMenuRadioItemIndicator,
  RadioGroup: ContextMenuRadioGroup,
  Separator: ContextMenuSeparator,
  Trigger: ContextMenuTrigger,
  GroupLabel: ContextMenuGroupLabel,
  Content: ContextMenuContent,
  SubmenuIndicator: ContextMenuSubmenuIndicator,
  Arrow: ContextMenuArrow,
  SubmenuContent: ContextMenuSubmenuContent,
  SubmenuRoot: ContextMenuSubmenuRoot,
  SubmenuTrigger: ContextMenuSubmenuTrigger,
});

export namespace ContextMenu {
  export type Variants = VariantProps<typeof contextMenuStyles>;
  export interface Props extends ContextMenuRoot.Props {}
}
