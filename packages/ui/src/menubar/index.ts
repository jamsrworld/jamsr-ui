import type { VariantProps } from "tailwind-variants";
import { menubarStyles } from "./styles";
import { Menubar as MenubarRoot, MenubarTrigger } from "./menubar";

export const Menubar = Object.assign(MenubarRoot, {
  Trigger: MenubarTrigger,
});

export namespace Menubar {
  export type Variants = VariantProps<typeof menubarStyles>;
  export interface Props extends MenubarRoot.Props {}
}
