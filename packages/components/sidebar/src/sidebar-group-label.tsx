import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarGroupLabelProps = UIProps<"div">;
export const SidebarGroupLabel = (props: SidebarGroupLabelProps) => {
  const { children, className: $className, ...restProps } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.groupLabel({
    className: cn(classNames?.groupLabel, $className),
  });
  return (
    <div data-slot="groupLabel" className={className} {...restProps}>
      {children}
    </div>
  );
};
