import { Button } from "@jamsr-ui/button";
import { Close } from "@jamsr-ui/shared-icons";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import React from "react";

export type ChipProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export const Chip = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, ChipProps>,
) => {
  const { as, children, onClose, className, ...restProps } = props;
  const Comp = as ?? "div";

  return (
    <Comp
      data-component="chip"
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
          size="xs"
          rounded
          onClick={onClose}
          className="size-4 shrink-0"
        >
          <Close className="!size-3" />
        </Button>
      )}
    </Comp>
  );
};
