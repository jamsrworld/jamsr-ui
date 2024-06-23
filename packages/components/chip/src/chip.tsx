import { Button } from "@jamsr-ui/button";
import { Close } from "@jamsr-ui/shared-icons";
import { ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
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
        "border-divider inline-flex items-center justify-between gap-1 rounded-full border px-2 py-1 text-sm",
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
};
