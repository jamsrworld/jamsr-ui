import { forwardRefUI } from "@jamsr-ui/utils";
import { HeaderDivider } from "./header-divider";
import { useHeader, type UseHeaderProps } from "./use-header";

export type HeaderProps = UseHeaderProps;

export const Header = forwardRefUI<"header", HeaderProps>((props, ref) => {
  const { Component, getBaseProps, children, defaultDivider } =
    useHeader(props);
  return (
    <Component
      ref={ref}
      {...getBaseProps()}
    >
      {children}
      <HeaderDivider show={defaultDivider} />
    </Component>
  );
});
