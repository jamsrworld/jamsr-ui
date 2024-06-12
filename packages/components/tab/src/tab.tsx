import { Button, type UseButtonProps } from "@jamsr-ui/button";
import { cn, forwardRefUI } from "@jamsr-ui/utils";
import { ActiveIndicator } from "./active-indicator";
import { useTab } from "./use-tabs";

export type TabProps = {
  title: string;
  value: string;
} & UseButtonProps;

export const Tab = forwardRefUI<"button", TabProps>((props: TabProps, ref) => {
  const { title, value, children, className, onClick, ...restProps } = props;
  const { selectedValue, onValueChange } = useTab();
  const isActive = value === selectedValue;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onValueChange(value);
  };

  return (
    <Button
      data-slot="tab"
      ref={ref}
      disableRipple
      disableAnimation
      variant="light"
      size="sm"
      className={cn(
        "relative z-10 text-sm hover:text-foreground-600",
        className,
      )}
      onClick={handleClick}
      rounded
      {...restProps}
    >
      {title}
      {isActive && <ActiveIndicator />}
    </Button>
  );
});
