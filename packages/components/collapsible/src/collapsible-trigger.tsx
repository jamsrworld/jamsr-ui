import { cn, ComponentPropsWithAs, type UIProps } from "@jamsr-ui/utils";
import { useCollapsibleContext } from "./collapsible-context";

export type CollapsibleTriggerProps = UIProps<"button">;

export const CollapsibleTrigger = <T extends React.ElementType = "button">(
  props: ComponentPropsWithAs<T, CollapsibleTriggerProps>,
) => {
  const { children, as, className, onClick, ...restProps } =
    props as CollapsibleTriggerProps;
  const Component = as ?? "button";

  const { isOpen, setIsOpen, isDisabled } = useCollapsibleContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setIsOpen(!isOpen);
  };

  return (
    <Component
      type="button"
      className={cn("text-left", className)}
      {...(!isDisabled && {
        onClick: handleClick,
      })}
      {...restProps}
    >
      {children}
    </Component>
  );
};
