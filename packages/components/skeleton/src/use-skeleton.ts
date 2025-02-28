import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useMemo, type Ref } from "react";
import {
  skeleton,
  type SkeletonSlots,
  type SkeletonVariantProps,
} from "./style";

type Props = {
  ref?: Ref<HTMLElement | null>;
  isLoading?: boolean;
  classNames?: SlotsToClasses<SkeletonSlots>;
} & SkeletonVariantProps;
export type UseSkeletonProps = UIProps<"div"> & Props;

export function useSkeleton($props: UseSkeletonProps) {
  const { skeleton: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    skeleton.variantKeys,
  );
  const {
    as,
    children,
    isLoading = true,
    className,
    classNames,
    ...otherProps
  } = props;

  const Component = as ?? "div";

  const slots = useMemo(
    () =>
      skeleton({
        ...variantProps,
      }),
    [variantProps],
  );

  const getSkeletonProps: PropGetter = (props) => {
    return {
      "data-loaded": dataAttr(!isLoading),
      className: slots.base({
        className: cn(classNames?.base, className, props?.className as string),
      }),
      ...otherProps,
    };
  };

  const getContentProps: PropGetter = (props) => {
    return {
      className: slots.content({
        className: cn(classNames?.content, props?.className as string),
      }),
    };
  };

  return {
    Component,
    children,
    slots,
    classNames,
    getSkeletonProps,
    getContentProps,
  };
}

export type UseSkeletonReturn = ReturnType<typeof useSkeleton>;
