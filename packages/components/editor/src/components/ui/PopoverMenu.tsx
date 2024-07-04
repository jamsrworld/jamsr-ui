import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
import { icons } from "lucide-react";
import type { HTMLProps } from "react";
import { Surface } from "./Surface";
import { Toolbar } from "./Toolbar";

export const { Trigger } = Popover;
export const { Portal } = Popover;

export type MenuProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  triggerClassName?: string;
  customTrigger?: boolean;
  isOpen?: boolean;
  onOpenChange?: (state: boolean) => void;
  withPortal?: boolean;
  tooltip?: string;
  isActive?: boolean;
};

export const Menu = ({
  customTrigger,
  trigger,
  triggerClassName,
  children,
  isOpen,
  withPortal,
  tooltip,
  onOpenChange,
}: MenuProps) => {
  return (
    <Popover.Root onOpenChange={onOpenChange}>
      {customTrigger ? (
        <Trigger asChild>{trigger}</Trigger>
      ) : (
        <Trigger asChild>
          <Toolbar.Button
            className={triggerClassName}
            tooltip={!isOpen ? tooltip : ""}
          >
            {trigger}
          </Toolbar.Button>
        </Trigger>
      )}
      {withPortal ? (
        <Popover.Portal className="z-[9999]">
          <Popover.Content asChild sideOffset={8}>
            <Surface className="z-[9999] flex max-h-80 min-w-60 flex-col gap-0.5 overflow-auto p-2">
              {children}
            </Surface>
          </Popover.Content>
        </Popover.Portal>
      ) : (
        <Popover.Content asChild sideOffset={8}>
          <Surface className="z-[9999] flex max-h-80 min-w-60 flex-col gap-0.5 overflow-auto p-2">
            {children}
          </Surface>
        </Popover.Content>
      )}
    </Popover.Root>
  );
};

Menu.displayName = "Menu";

export const Item = ({
  label,
  close = true,
  icon,
  iconComponent,
  disabled,
  onClick,
  isActive,
}: {
  label: string | React.ReactNode;
  icon?: keyof typeof icons;
  iconComponent?: React.ReactNode;
  close?: boolean;
  disabled?: boolean;
  onClick: () => void;
  isActive?: boolean;
}) => {
  const className = cn(
    "flex w-full items-center gap-2 rounded bg-transparent p-1.5 text-left text-sm font-medium text-neutral-500",
    !isActive && !disabled,
    "hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-900 dark:hover:text-neutral-200",
    isActive &&
      !disabled &&
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200",
    disabled && "cursor-not-allowed text-neutral-400 dark:text-neutral-600",
  );

  const IconComponent = icon ? icons[icon] : null;
  const IconCustomComponent = iconComponent || null;

  const ItemComponent = close ? Popover.Close : "button";

  return (
    <ItemComponent className={className} onClick={onClick} disabled={disabled}>
      {IconComponent && <IconComponent className="size-4" />}
      {IconCustomComponent}
      {label}
    </ItemComponent>
  );
};

export type CategoryTitle = {
  children: React.ReactNode;
};

export const CategoryTitle = ({ children }: CategoryTitle) => {
  return (
    <div className="mb-1.5 mt-4 select-none px-1 text-[0.625rem] font-medium uppercase text-neutral-400 first:mt-1.5 dark:text-neutral-600">
      {children}
    </div>
  );
};

export const Divider = (props: HTMLProps<HTMLHRElement>) => {
  return (
    <hr
      {...props}
      className="my-1 border-neutral-200 dark:border-neutral-800"
    />
  );
};
