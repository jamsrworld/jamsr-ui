"use client";

import { createContext, use, useMemo } from "react";

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";

import { toolbarStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ToolbarVariants } from "./styles";

const ToolbarContext = createContext<{
  styles: ReturnType<typeof toolbarStyles>;
} | null>(null);

const useToolbarContext = () => {
  const ctx = use(ToolbarContext);
  if (!ctx) {
    throw new Error("useToolbarContext must be used within a ToolbarContext");
  }
  return ctx;
};

export const Toolbar = (props: Toolbar.Props) => {
  const { orientation, className, ...restProps } = props;
  const styles = toolbarStyles({ orientation });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ToolbarContext value={value}>
      <ToolbarPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
        orientation={orientation}
      />
    </ToolbarContext>
  );
};

export namespace Toolbar {
  export interface Props extends ToolbarPrimitive.Root.Props, ToolbarVariants {}
}

export const ToolbarButton = (props: ToolbarPrimitive.Button.Props) => {
  const { styles } = useToolbarContext();
  return (
    <ToolbarPrimitive.Button
      {...props}
      className={styles.button({ className: cn(props.className) })}
    />
  );
};

export const ToolbarLink = (props: ToolbarPrimitive.Link.Props) => {
  const { styles } = useToolbarContext();
  return (
    <ToolbarPrimitive.Link
      {...props}
      className={styles.link({ className: cn(props.className) })}
    />
  );
};

export const ToolbarSeparator = (props: ToolbarPrimitive.Separator.Props) => {
  const { styles } = useToolbarContext();
  return (
    <ToolbarPrimitive.Separator
      {...props}
      className={styles.separator({ className: cn(props.className) })}
    />
  );
};

export const ToolbarGroup = (props: ToolbarPrimitive.Group.Props) => {
  const { styles } = useToolbarContext();
  return (
    <ToolbarPrimitive.Group
      {...props}
      className={styles.group({ className: cn(props.className) })}
    />
  );
};

export const ToolbarInput = (props: ToolbarPrimitive.Input.Props) => {
  const { styles } = useToolbarContext();
  return (
    <ToolbarPrimitive.Input
      {...props}
      className={styles.input({ className: cn(props.className) })}
    />
  );
};
