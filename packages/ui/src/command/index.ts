import {
  Command as CommandRoot,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
} from "./command";

import type { VariantProps } from "tailwind-variants";

import type { commandStyles } from "./styles";

export const Command = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Separator: CommandSeparator,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Dialog: CommandDialog,
  Loading: CommandLoading,
});

export namespace Command {
  export type Variants = VariantProps<typeof commandStyles>;
  export interface Props extends CommandRoot.Props {}
  export interface Input extends CommandInput.Props {}
  export interface List extends CommandList.Props {}
  export interface Empty extends CommandEmpty.Props {}
  export interface Group extends CommandGroup.Props {}
  export interface Separator extends CommandSeparator.Props {}
  export interface Item extends CommandItem.Props {}
  export interface Shortcut extends CommandShortcut.Props {}
  export interface Dialog extends CommandDialog.Props {}
  export interface Loading extends CommandLoading.Props {}
}
