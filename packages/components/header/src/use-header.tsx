import { type PropGetter, type UIProps, cn } from "@jamsr-ui/utils";
import { useCallback } from "react";
import { header, type HeaderVariantProps } from "./style";

type Props = UIProps<"header"> & {
  defaultDivider?: boolean;
};

export type UseHeaderProps = Props & HeaderVariantProps;

export const useHeader = (props: UseHeaderProps) => {
  const { as, blur, className, children, defaultDivider, ...restProps } = props;

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
    defaultDivider,
    children,
    getBaseProps,
  };
};
