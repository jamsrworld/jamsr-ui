import type { ButtonHTMLAttributes, HTMLProps } from "react";

import { cn } from "@/lib/utils";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import { Surface } from "./Surface";
import Tooltip from "./Tooltip";

export type ToolbarWrapperProps = {
  shouldShowContent?: boolean;
  isVertical?: boolean;
} & HTMLProps<HTMLDivElement>;

const ToolbarWrapper = ({
  shouldShowContent = true,
  children,
  isVertical = false,
  className,
  ...rest
}: ToolbarWrapperProps) => {
  const toolbarClassName = cn(
    "inline-flex h-full gap-0.5 leading-none text-black",
    isVertical ? "flex-col p-2" : "flex-row items-center p-1",
    className,
  );

  return (
    shouldShowContent && (
      <Surface className={toolbarClassName} {...rest}>
        {children}
      </Surface>
    )
  );
};

export type ToolbarDividerProps = {
  horizontal?: boolean;
} & HTMLProps<HTMLDivElement>;

const ToolbarDivider = ({
  horizontal,
  className,
  ...rest
}: ToolbarDividerProps) => {
  const dividerClassName = cn(
    "bg-neutral-200 dark:bg-neutral-800",
    horizontal
      ? "my-1 h-px w-full min-w-6 first:mt-0 last:mt-0"
      : "mx-1 h-full min-h-6 w-px first:ml-0 last:mr-0",
    className,
  );

  return <div className={dividerClassName} {...rest} />;
};

export type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  activeClassname?: string;
  tooltip?: string;
  tooltipShortcut?: string[];
  buttonSize?: ButtonProps["buttonSize"];
  variant?: ButtonProps["variant"];
};

const ToolbarButton = ({
  children,
  buttonSize = "icon",
  variant = "ghost",
  className,
  tooltip,
  tooltipShortcut,
  activeClassname,
  ...rest
}: ToolbarButtonProps) => {
  const buttonClass = cn("w-auto min-w-8 gap-1 px-2", className);

  const content = (
    <Button
      activeClassname={activeClassname}
      className={buttonClass}
      variant={variant}
      buttonSize={buttonSize}
      {...rest}
    >
      {children}
    </Button>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} shortcut={tooltipShortcut}>
        {content}
      </Tooltip>
    );
  }

  return content;
};

export const Toolbar = {
  Wrapper: ToolbarWrapper,
  Divider: ToolbarDivider,
  Button: ToolbarButton,
};
