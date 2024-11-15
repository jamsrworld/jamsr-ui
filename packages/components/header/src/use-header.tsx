import { useUIStyle } from "@jamsr-ui/styles";
import type { PropGetter, UIProps } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { useCallback, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { header, type HeaderVariantProps } from "./style";

type Props = UIProps<"header"> & {
  hideOnScroll?: boolean;
  isBordered?: boolean;
  visibleBound?: number;
};

export type UseHeaderProps = Props & HeaderVariantProps;

export const useHeader = ($props: UseHeaderProps) => {
  const { header: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    blur,
    className,
    children,
    isBordered = false,
    hideOnScroll = false,
    visibleBound = 80,
    position,
    ...restProps
  } = props;

  const style = header({
    blur,
    position,
  });

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
