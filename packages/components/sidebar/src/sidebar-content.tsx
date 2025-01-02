import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarContentProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const SidebarContent = <T extends React.ElementType = "div">(
  props: SidebarContentProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.content({
    className: cn(classNames?.content, $className),
  });
  return (
    <div data-slot="content" className={className} {...restProps}>
      {children}
    </div>
  );
};