import { Button } from "@jamsr-ui/button";
import { Close } from "@jamsr-ui/shared-icons";
import { cn, forwardRefUI } from "@jamsr-ui/utils";
import React from "react";

export type ChipProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export const Chip = forwardRefUI<"div", ChipProps>((props, ref) => {
  const { as, children, onClose, className, ...restProps } = props;
  const Comp = as ?? "div";
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-between gap-1 rounded-full border border-divider px-2 py-1 text-sm",
        className,
      )}
      {...restProps}
    >
      {children}
      {onClose && (
        <Button
          isIconOnly
          size="sm"
          rounded
          onClick={onClose}
        >
          <Close />
        </Button>
      )}
    </Comp>
  );
});
