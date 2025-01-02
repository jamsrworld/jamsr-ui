import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const SidebarFooter = <T extends React.ElementType = "div">(
  props: SidebarFooterProps<T>,
) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.footer({
    className: cn(classNames?.footer, $className),
  });
  return (
    <div data-slot="footer" className={className} {...restProps}>
      {children}
    </div>
  );
};
