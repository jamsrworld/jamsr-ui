import { Button } from "@jamsr-ui/button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import React from "react";

export type ChipProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & {
    children: React.ReactNode;
    onDelete?: () => void;
  };

export const Chip = <T extends React.ElementType = "div">(
  $props: ChipProps<T>,
) => {
  const { chip: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, children, onDelete, className, ...restProps } = props;
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
      {onDelete && (
        <Button
          isIconOnly
          size="xs"
          isRounded
          onClick={onDelete}
          className="size-4 shrink-0"
        >
          <CloseIcon className="!size-3" />
        </Button>
      )}
    </Comp>
  );
};
