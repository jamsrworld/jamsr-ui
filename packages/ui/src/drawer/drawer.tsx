"use client";

import { createContext, use, useMemo } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { drawerStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type DrawerVariants = VariantProps<typeof drawerStyles>;

const DrawerContext = createContext<{
  styles: ReturnType<typeof drawerStyles>;
} | null>(null);

const useDrawerContext = () => {
  const ctx = use(DrawerContext);
  if (!ctx) {
    throw new Error("useDrawerContext must be used within a DrawerContext");
  }
  return ctx;
};

export const Drawer = (props: Drawer.Props) => {
  const {
    size,
    backdrop,
    radius,
    swipeDirection = "down",
    ...restProps
  } = props;
  const styles = drawerStyles({
    size,
    backdrop,
    radius,
    anchor: swipeDirection,
  });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <DrawerContext value={value}>
      <DrawerPrimitive.Root swipeDirection={swipeDirection} {...restProps} />
    </DrawerContext>
  );
};

export namespace Drawer {
  export interface Props extends DrawerPrimitive.Root.Props, DrawerVariants {}
}

export const DrawerTrigger = (props: DrawerPrimitive.Trigger.Props) => {
  return <DrawerPrimitive.Trigger {...props} />;
};

export const DrawerContent = (props: DrawerContent.Props) => {
  const { styles } = useDrawerContext();
  const { slotProps, ...restProps } = props;
  return (
    <DrawerPrimitive.Portal {...slotProps?.portal}>
      <DrawerPrimitive.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: cn(slotProps?.backdrop?.className),
        })}
      />
      <DrawerPrimitive.Viewport
        {...slotProps?.viewport}
        className={styles.viewport({
          className: cn(slotProps?.viewport?.className),
        })}
      >
        <DrawerPrimitive.Popup
          {...slotProps?.popup}
          className={styles.popup({
            className: cn(slotProps?.popup?.className),
          })}
        >
          <DrawerPrimitive.Content
            {...restProps}
            className={styles.content({ className: cn(restProps.className) })}
          />
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
};
export namespace DrawerContent {
  export interface Props extends DrawerPrimitive.Content.Props {
    slotProps?: {
      portal?: DrawerPrimitive.Portal.Props;
      backdrop?: DrawerPrimitive.Backdrop.Props;
      viewport?: DrawerPrimitive.Viewport.Props;
      popup?: DrawerPrimitive.Popup.Props;
    };
  }
}

export const DrawerClose = DrawerPrimitive.Close;

export const DrawerTitle = (props: DrawerPrimitive.Title.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerPrimitive.Title
      {...props}
      className={styles.title({ className: cn(props.className) })}
    />
  );
};

export const DrawerDescription = (props: DrawerPrimitive.Description.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerPrimitive.Description
      {...props}
      className={styles.description({ className: cn(props.className) })}
    />
  );
};

export const DrawerIndent = (props: DrawerPrimitive.Indent.Props) => {
  return <DrawerPrimitive.Indent {...props} />;
};

export const DrawerIndentBackground = (
  props: DrawerPrimitive.IndentBackground.Props,
) => {
  return <DrawerPrimitive.IndentBackground {...props} />;
};

export const DrawerFooter = (props: DrawerFooter.Props) => {
  const { styles } = useDrawerContext();
  return (
    <div
      {...props}
      className={styles.footer({ className: cn(props.className) })}
    />
  );
};
export namespace DrawerFooter {
  export interface Props extends ComponentProps<"div"> {}
}

export const DrawerBar = (props: DrawerBar.Props) => {
  const { styles } = useDrawerContext();
  return (
    <div
      {...props}
      className={styles.bar({ className: cn(props.className) })}
    />
  );
};
export namespace DrawerBar {
  export interface Props extends ComponentProps<"div"> {}
}
