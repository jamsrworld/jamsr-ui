import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarContentProps = UIProps<"div">;
export const SidebarContent = (props: SidebarContentProps) => {
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
