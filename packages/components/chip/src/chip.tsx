import { CloseFilledIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, SlotsToClasses } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import React from "react";
import { chip, type ChipSlots, type ChipVariantsProps } from "./styles";

export type ChipProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & {
    children: React.ReactNode;
    onDelete?: () => void;
    classNames?: SlotsToClasses<ChipSlots>;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  } & ChipVariantsProps;

export const Chip = <T extends React.ElementType = "div">(
  $props: ChipProps<T>,
) => {
  const { chip: Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);
  const {
    as,
    children,
    onDelete,
    className,
    color,
    size,
    variant,
    classNames,
    isSquare,
    radius,
    isBordered,
    startContent,
    endContent,
    ...restProps
  } = props;
  const Comp = as ?? "div";
  const styles = chip({
    color,
    size,
    variant,
    isSquare,
    radius,
    isBordered,
  });
  return (
    <Comp
      data-component="chip"
      data-slot="base"
      className={styles.base({
        className: cn(className, classNames?.base),
      })}
      {...restProps}
    >
      <div
        className={styles.content({ className: classNames?.content })}
        data-slot="content"
      >
        {startContent}
        {children}
        {endContent}
      </div>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className={styles.closeButton({ className: classNames?.closeButton })}
        >
          <CloseFilledIcon className="size-4" />
        </button>
      )}
    </Comp>
  );
};
