import { Menubar as MenubarRoot, MenubarTrigger } from "./menubar";

import type { VariantProps } from "tailwind-variants";

import type { menubarStyles } from "./styles";

export const Menubar = Object.assign(MenubarRoot, {
  Trigger: MenubarTrigger,
});

export namespace Menubar {
  export type Variants = VariantProps<typeof menubarStyles>;
  export interface Props extends MenubarRoot.Props {}
}
