import {
  Toolbar as ToolbarRoot,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from "./toolbar";

import type { VariantProps } from "tailwind-variants";

import type { toolbarStyles } from "./styles";

export const Toolbar = Object.assign(ToolbarRoot, {
  Button: ToolbarButton,
  Link: ToolbarLink,
  Separator: ToolbarSeparator,
  Group: ToolbarGroup,
  Input: ToolbarInput,
});

export namespace Toolbar {
  export type Variants = VariantProps<typeof toolbarStyles>;
  export interface Props extends ToolbarRoot.Props {}
}
