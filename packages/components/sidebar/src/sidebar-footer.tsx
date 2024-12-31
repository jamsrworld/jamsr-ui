import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarFooterProps = UIProps<"div">;
export const SidebarFooter = (props: SidebarFooterProps) => {
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
