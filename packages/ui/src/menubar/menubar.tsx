"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";

import { menubarStyles } from "./styles";
import { cn } from "../utils/cn";

const styles = menubarStyles();

export const Menubar = (props: MenubarPrimitive.Props) => {
  return (
    <MenubarPrimitive
      {...props}
      className={styles.root({ className: cn(props.className) })}
    />
  );
};

export namespace Menubar {
  export interface Props extends MenubarPrimitive.Props {}
}

export const MenubarTrigger = (props: MenuPrimitive.Trigger.Props) => {
  return (
    <MenuPrimitive.Trigger
      {...props}
      className={styles.trigger({ className: cn(props.className) })}
    />
  );
};
