"use client";

import { createContext, use, useMemo } from "react";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { tooltipStyles } from "./styles";
import { cn } from "../utils/cn";

import type { TooltipVariants } from "./styles";

const TooltipStyleContext = createContext<{
  styles: ReturnType<typeof tooltipStyles>;
  showArrow: boolean;
} | null>(null);

const useTooltipStyleContext = () => {
  const ctx = use(TooltipStyleContext);
  if (!ctx) {
    throw new Error("useTooltipStyleContext must be used within a Tooltip");
  }
  return ctx;
};

export const Tooltip = (props: Tooltip.Props) => {
  const { radius, showArrow = false, ...restProps } = props;
  const styles = tooltipStyles({ radius });
  const value = useMemo(() => ({ styles, showArrow }), [styles, showArrow]);
  return (
    <TooltipStyleContext value={value}>
      <TooltipPrimitive.Root {...restProps} />
    </TooltipStyleContext>
  );
};

export namespace Tooltip {
  export interface Props extends TooltipPrimitive.Root.Props, TooltipVariants {
    showArrow?: boolean;
  }
}

export const TooltipTrigger = (props: TooltipPrimitive.Trigger.Props) => {
  return <TooltipPrimitive.Trigger {...props} />;
};

export const TooltipContent = (props: TooltipContent.Props) => {
  const { styles, showArrow } = useTooltipStyleContext();
  const { slotProps, ...restProps } = props;
  return (
    <TooltipPrimitive.Portal {...slotProps?.portal}>
      <TooltipPrimitive.Positioner
        sideOffset={showArrow ? 8 : 4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <TooltipPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
};
export namespace TooltipContent {
  export interface Props extends TooltipPrimitive.Popup.Props {
    slotProps?: {
      portal?: TooltipPrimitive.Portal.Props;
      positioner?: TooltipPrimitive.Positioner.Props;
    };
  }
}

export const TooltipArrow = (props: TooltipPrimitive.Arrow.Props) => {
  const { styles } = useTooltipStyleContext();
  return (
    <TooltipPrimitive.Arrow
      {...props}
      className={styles.arrow({ className: cn(props.className) })}
    />
  );
};

export const TooltipGroup = TooltipPrimitive.Provider;
