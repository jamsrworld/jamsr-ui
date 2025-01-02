import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const SidebarHeader = <T extends React.ElementType = "div">(
  props: SidebarHeaderProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.header({
    className: cn(classNames?.header, $className),
  });
  return (
    <div data-slot="header" className={className} {...restProps}>
      {children}
    </div>
  );
};
