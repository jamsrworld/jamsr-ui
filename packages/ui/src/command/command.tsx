"use client";

import { Command as CommandPrimitive } from "cmdk";

import { commandStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ComponentProps } from "react";

const styles = commandStyles();

export const Command = (props: Command.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive
      {...restProps}
      className={styles.root({ className: cn(className) })}
    />
  );
};

export namespace Command {
  export interface Props extends ComponentProps<typeof CommandPrimitive> {}
}

export const CommandInput = (props: CommandInput.Props) => {
  const { className, ...restProps } = props;
  return (
    <div className={styles.inputWrapper()}>
      <svg
        fill="none"
        height="15"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="15"
      >
        <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
        <path d="M16 16l4.5 4.5" />
      </svg>
      <CommandPrimitive.Input
        {...restProps}
        className={styles.input({ className: cn(className) })}
      />
    </div>
  );
};

export namespace CommandInput {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Input
  > {}
}

export const CommandList = (props: CommandList.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.List
      {...restProps}
      className={styles.list({ className: cn(className) })}
    />
  );
};

export namespace CommandList {
  export interface Props extends ComponentProps<typeof CommandPrimitive.List> {}
}

export const CommandEmpty = (props: CommandEmpty.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.Empty
      {...restProps}
      className={styles.empty({ className: cn(className) })}
    />
  );
};

export namespace CommandEmpty {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Empty
  > {}
}

export const CommandGroup = (props: CommandGroup.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.Group
      {...restProps}
      className={styles.group({ className: cn(className) })}
    />
  );
};

export namespace CommandGroup {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Group
  > {}
}

export const CommandSeparator = (props: CommandSeparator.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.Separator
      {...restProps}
      className={styles.separator({ className: cn(className) })}
    />
  );
};

export namespace CommandSeparator {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Separator
  > {}
}

export const CommandItem = (props: CommandItem.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.Item
      {...restProps}
      className={styles.item({ className: cn(className) })}
    />
  );
};

export namespace CommandItem {
  export interface Props extends ComponentProps<typeof CommandPrimitive.Item> {}
}

export const CommandShortcut = (props: CommandShortcut.Props) => {
  const { className, ...restProps } = props;
  return (
    <span
      {...restProps}
      className={styles.shortcut({ className: cn(className) })}
    />
  );
};

export namespace CommandShortcut {
  export interface Props extends ComponentProps<"span"> {}
}

export const CommandDialog = (props: CommandDialog.Props) => {
  const { children, ...restProps } = props;
  return (
    <CommandPrimitive.Dialog {...restProps}>
      <div className={styles.dialogOverlay()} />
      <div className={styles.dialogContent()}>
        <Command>{children}</Command>
      </div>
    </CommandPrimitive.Dialog>
  );
};

export namespace CommandDialog {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Dialog
  > {}
}

export const CommandLoading = (props: CommandLoading.Props) => {
  const { className, ...restProps } = props;
  return (
    <CommandPrimitive.Loading
      {...restProps}
      className={styles.loading({ className: cn(className) })}
    />
  );
};

export namespace CommandLoading {
  export interface Props extends ComponentProps<
    typeof CommandPrimitive.Loading
  > {}
}
