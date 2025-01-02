import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarGroupProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const SidebarGroup = <T extends React.ElementType = "div">(
  props: SidebarGroupProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.group({
    className: cn(classNames?.group, $className),
  });
  return (
    <div data-slot="group" className={className} {...restProps}>
      {children}
    </div>
  );
};
