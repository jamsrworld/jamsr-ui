import type { PropGetter, SlotsToClasses, UIProps } from "@jamsr-ui/utils";
import { cn, mapPropsVariants } from "@jamsr-ui/utils";
import { useCallback, useMemo, type ComponentProps } from "react";
import { table, type TableSlots, type TableVariantProps } from "./style";

export type UseTableProps = TableVariantProps &
  UIProps<"table"> & {
    wrapperRef?: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
    classNames?: SlotsToClasses<TableSlots>;
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    slotProps?: {
      wrapperProps?: ComponentProps<"div">;
    };
  };

export const useTable = (originalProps: UseTableProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    table.variantKeys,
  );

  const {
    as,
    className,
    classNames,
    children,
    topContent,
    bottomContent,
    wrapperRef,
    slotProps = {},
    ...restProps
  } = props;
  const Component = as ?? "table";

  const slots = useMemo(() => {
    return table({
      ...variantProps,
    });
  }, [variantProps]);

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => ({
      ...props,
      ...restProps,
      "data-slot": "base",
      className: slots.base({
        className: cn(className, classNames?.base, props?.className),
      }),
    }),
    [className, classNames?.base, restProps, slots],
  );

  const getWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => ({
      ...slotProps.wrapperProps,
      ...props,
      ref: wrapperRef,
      "data-slot": "wrapper",
      className: slots.wrapper({
        className: cn(classNames?.wrapper, props?.className),
      }),
    }),
    [classNames?.wrapper, slotProps.wrapperProps, slots, wrapperRef],
  );

  const getTableProps: PropGetter<ComponentProps<"table">> = useCallback(
    (props) => ({
      ...props,
      className: slots.table({
        className: cn(classNames?.table, props?.className),
      }),
    }),
    [classNames?.table, slots],
  );

  return {
    slots,
    Component,
    children,
    topContent,
    bottomContent,
    getBaseProps,
    getWrapperProps,
    getTableProps,
    classNames,
  };
};
