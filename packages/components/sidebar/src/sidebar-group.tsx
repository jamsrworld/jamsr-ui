import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarGroupProps = UIProps<"div">;
export const SidebarGroup = (props: SidebarGroupProps) => {
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
