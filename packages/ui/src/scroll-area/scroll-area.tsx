"use client";

import { createContext, use, useMemo } from "react";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { scrollAreaStyles, scrollbarStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ScrollAreaVariants } from "./styles";

const ScrollAreaContext = createContext<{
  styles: ReturnType<typeof scrollAreaStyles>;
} | null>(null);

const useScrollAreaContext = () => {
  const ctx = use(ScrollAreaContext);
  if (!ctx) {
    throw new Error("useScrollAreaContext must be used within a ScrollArea");
  }
  return ctx;
};

export const ScrollAreaRoot = (props: ScrollAreaRoot.Props) => {
  const { className, ...rest } = props;
  const styles = scrollAreaStyles();
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ScrollAreaContext value={value}>
      <ScrollAreaPrimitive.Root
        {...rest}
        className={styles.root({ className: cn(className) })}
      />
    </ScrollAreaContext>
  );
};

export namespace ScrollAreaRoot {
  export interface Props
    extends ScrollAreaPrimitive.Root.Props, ScrollAreaVariants {}
}

export const ScrollAreaViewport = (
  props: ScrollAreaPrimitive.Viewport.Props,
) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaPrimitive.Viewport
      {...rest}
      className={styles.viewport({ className: cn(className) })}
    />
  );
};

export const ScrollAreaScrollbar = (
  props: ScrollAreaPrimitive.Scrollbar.Props,
) => {
  const {
    orientation = "vertical",
    children = <ScrollAreaThumb />,
    className,
    ...rest
  } = props;
  const styles = scrollbarStyles({ orientation, className: cn(className) });
  return (
    <ScrollAreaPrimitive.Scrollbar
      {...rest}
      className={styles}
      orientation={orientation}
    >
      {children}
    </ScrollAreaPrimitive.Scrollbar>
  );
};

export const ScrollAreaThumb = (props: ScrollAreaPrimitive.Thumb.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaPrimitive.Thumb
      {...rest}
      className={styles.thumb({ className: cn(className) })}
    />
  );
};

export const ScrollAreaCorner = (props: ScrollAreaPrimitive.Corner.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaPrimitive.Corner
      {...rest}
      className={styles.corner({ className: cn(className) })}
    />
  );
};

export const ScrollAreaContent = (props: ScrollAreaPrimitive.Content.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaPrimitive.Content
      {...rest}
      className={styles.content({ className: cn(className) })}
    />
  );
};
