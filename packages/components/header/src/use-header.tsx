import { PropGetter, UIProps, cn } from "@jamsr-ui/utils";
import { useCallback } from "react";
import { header, type HeaderVariantProps } from "./style";

type Props = UIProps<"header"> & {
  showDivider?: boolean;
  showDividerDefault?: boolean;
};

export type UseHeaderProps = Props & HeaderVariantProps;

export const useHeader = (props: UseHeaderProps) => {
  const {
    as,
    blur,
    className,
    children,
    showDivider = true,
    showDividerDefault,
    ...restProps
  } = props;

  const Component = as ?? "header";

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
    Component,
    showDivider,
    showDividerDefault,
    children,
    getBaseProps,
  };
};
