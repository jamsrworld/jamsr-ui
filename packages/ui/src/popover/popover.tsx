"use client";

import { createContext, use, useMemo } from "react";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { popoverStyles } from "./styles";
import { cn } from "../utils/cn";

import type { PopoverVariants } from "./styles";

const PopoverStylesContext = createContext<{
  styles: ReturnType<typeof popoverStyles>;
  backdrop?: PopoverVariants["backdrop"];
  showArrow?: boolean;
} | null>(null);

const usePopoverContext = () => {
  const ctx = use(PopoverStylesContext);
  if (!ctx) {
    throw new Error("usePopoverContext must be used within a Popover");
  }
  return ctx;
};

export const Popover = (props: Popover.Props) => {
  const { radius, backdrop, showArrow, ...restProps } = props;
  const styles = popoverStyles({ radius, backdrop });
  const value = useMemo(
    () => ({ styles, backdrop, showArrow }),
    [styles, backdrop, showArrow],
  );
  return (
    <PopoverStylesContext.Provider value={value}>
      <PopoverPrimitive.Root {...restProps} />
    </PopoverStylesContext.Provider>
  );
};

export namespace Popover {
  export interface Props extends PopoverPrimitive.Root.Props, PopoverVariants {
    showArrow?: boolean;
  }
}

export const PopoverTrigger = (props: PopoverPrimitive.Trigger.Props) => {
  return <PopoverPrimitive.Trigger {...props} />;
};

export const PopoverContent = (props: PopoverContent.Props) => {
  const { styles, showArrow } = usePopoverContext();
  const { slotProps, ...restProps } = props;
  return (
    <PopoverPrimitive.Portal {...slotProps?.portal}>
      <PopoverPrimitive.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: cn(slotProps?.backdrop?.className),
        })}
      />
      <PopoverPrimitive.Positioner
        sideOffset={showArrow ? 8 : 4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <PopoverPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};
export namespace PopoverContent {
  export interface Props extends PopoverPrimitive.Popup.Props {
    slotProps?: {
      portal?: PopoverPrimitive.Portal.Props;
      backdrop?: PopoverPrimitive.Backdrop.Props;
      positioner?: PopoverPrimitive.Positioner.Props;
    };
  }
}

export const PopoverArrow = (props: PopoverPrimitive.Arrow.Props) => {
  const { styles } = usePopoverContext();
  const { children = <ArrowSvg />, className, ...restProps } = props;
  return (
    <PopoverPrimitive.Arrow
      {...restProps}
      className={styles.arrow({ className: cn(className) })}
    >
      {children}
    </PopoverPrimitive.Arrow>
  );
};

const ArrowSvg = (props: React.ComponentProps<"svg">) => {
  return (
    <svg fill="none" height="10" viewBox="0 0 20 10" width="20" {...props}>
      <path
        className="fill-current"
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      />
      <path d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z" />
      <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
    </svg>
  );
};

export const PopoverTitle = (props: PopoverPrimitive.Title.Props) => {
  return <PopoverPrimitive.Title {...props} />;
};

export const PopoverDescription = (
  props: PopoverPrimitive.Description.Props,
) => {
  return <PopoverPrimitive.Description {...props} />;
};
