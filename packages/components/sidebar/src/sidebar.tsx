import {
  cn,
  type ComponentPropsWithAs,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { useMemo } from "react";
import { type SidebarContextType, SidebarProvider } from "./sidebar-context";
import { sidebar, type SidebarSlots } from "./styles";

export type SidebarProps<T extends React.ElementType = "aside"> =
  ComponentPropsWithAs<T> & {
    classNames?: SlotsToClasses<SidebarSlots>;
  };

export const Sidebar = <T extends React.ElementType = "aside">(
  props: SidebarProps<T>,
) => {
  const { children, className: $className, classNames, ...restProps } = props;
  const styles = sidebar();
  const className = styles.base({
    className: cn($className, classNames?.base),
  });
  const value: SidebarContextType = useMemo(
    () => ({ styles, classNames }),
    [classNames, styles],
  );
  return (
    <aside
      data-slot="base"
      data-component="sidebar"
      className={className}
      {...restProps}
    >
      <SidebarProvider value={value}>{children}</SidebarProvider>
    </aside>
  );
};
