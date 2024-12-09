import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
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

interface Props extends UIProps<"div"> {
  ref?: Ref<HTMLElement | null>;
  isLoading?: boolean;
  classNames?: SlotsToClasses<SkeletonSlots>;
}

export type UseSkeletonProps = Props & SkeletonVariantProps;

export function useSkeleton($props: UseSkeletonProps) {
  const { skeleton:  Props = {}, globalConfig } = useUIStyle();
  const $$props = deepMergeProps(Props, $props, globalConfig);

  const [props, variantProps] = mapPropsVariants($$props, skeleton.variantKeys);
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
