import type { PropGetter, UIProps } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useCallback } from "react";
import { header, type HeaderVariantProps } from "./style";

type Props = UIProps<"header"> & {
  hideOnScroll?: boolean;
  isBordered?: boolean;
};

export type UseHeaderProps = Props & HeaderVariantProps;

export const useHeader = (props: UseHeaderProps) => {
  const {
    blur,
    className,
    children,
    isBordered = true,
    hideOnScroll = false,
    ...restProps
  } = props;


  const style = header({
    blur,
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
  };
};
