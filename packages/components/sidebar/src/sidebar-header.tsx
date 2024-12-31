import { cn, type UIProps } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarHeaderProps = UIProps<"div">;
export const SidebarHeader = (props: SidebarHeaderProps) => {
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
