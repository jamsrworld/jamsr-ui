import { cn, type SlotsToClasses, type UIProps } from "@jamsr-ui/utils";
import { useMemo } from "react";
import { type SidebarContextType, SidebarProvider } from "./sidebar-context";
import { sidebar, type SidebarSlots } from "./styles";

export type SidebarProps = UIProps<"aside"> & {
  classNames?: SlotsToClasses<SidebarSlots>;
};

export const Sidebar = (props: SidebarProps) => {
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
