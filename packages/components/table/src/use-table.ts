import { useUIStyle } from "@jamsr-ui/styles";
import type { PropGetter, SlotsToClasses, UIProps } from "@jamsr-ui/utils";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo, type ComponentProps } from "react";
import { table, type TableSlots, type TableVariantProps } from "./styles";

type Props = TableVariantProps & {
  wrapperRef?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  classNames?: SlotsToClasses<TableSlots>;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  slotProps?: {
    wrapperProps?: ComponentProps<"div">;
  };
};
export type UseTableProps = UIProps<"table", Props>;

export const useTable = ($props: UseTableProps) => {
  const { table: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props as UIProps<"table", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
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

  const styles = useMemo(() => {
    return table({
      ...variantProps,
    });
  }, [variantProps]);

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => ({
      ...props,
      ...restProps,
      "data-slot": "base",
      className: styles.base({
        className: cn(className, classNames?.base, props?.className),
      }),
    }),
    [className, classNames?.base, restProps, styles],
  );

  const getWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => ({
      ...slotProps.wrapperProps,
      ...props,
      ref: wrapperRef,
      "data-slot": "wrapper",
      className: styles.wrapper({
        className: cn(classNames?.wrapper, props?.className),
      }),
    }),
    [classNames?.wrapper, slotProps.wrapperProps, styles, wrapperRef],
  );

  const getTableProps: PropGetter<ComponentProps<"table">> = useCallback(
    (props) => ({
      ...props,
      className: styles.table({
        className: cn(classNames?.table, props?.className),
      }),
    }),
    [classNames?.table, styles],
  );

  return {
    styles,
    Component,
    children,
    topContent,
    bottomContent,
    getBaseProps,
    getWrapperProps,
    getTableProps,
    classNames,
    variantProps,
  };
};
