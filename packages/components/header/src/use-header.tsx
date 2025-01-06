import { useUIStyle } from "@jamsr-ui/styles";
import type { PropGetter, UIProps } from "@jamsr-ui/utils";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useState } from "react";
import { header, type HeaderVariantProps } from "./style";

type Props = HeaderVariantProps & {
  hideOnScroll?: boolean;
  isBordered?: boolean;
  visibleBound?: number;
};

export type UseHeaderProps = UIProps<"header", Props>;

export const useHeader = ($props: UseHeaderProps) => {
  const { header: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    header.variantKeys,
  );

  const {
    className,
    children,
    isBordered = false,
    hideOnScroll = false,
    visibleBound = 80,
    ...restProps
  } = props;

  const style = header(variantProps);

  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - (previous ?? 0);
    const isScrollingDown = diff > 0;
    if (hideOnScroll) {
      if (scrollY.get() < visibleBound) {
        setIsVisible(true);
      } else if (isScrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  });

  const getBaseProps: PropGetter = useCallback(() => {
    return {
      className: cn(style, className),
      ...restProps,
    };
  }, [className, restProps, style]);

  return {
    isBordered,
    hideOnScroll,
    children,
    getBaseProps,
    isVisible,
  };
};
