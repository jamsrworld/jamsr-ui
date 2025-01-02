import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarGroupLabelProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const SidebarGroupLabel = <T extends React.ElementType = "div">(
  props: SidebarGroupLabelProps<T>,
) => {
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
