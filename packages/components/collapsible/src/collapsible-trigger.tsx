/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { cn, type UIProps } from "@jamsr-ui/utils";
import { useCollapsibleContext } from "./collapsible-context";

type Props = UIProps<"button">;

export const CollapsibleTrigger = (props: Props) => {
  const { children, as, className, onClick, ...restProps } = props;
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
