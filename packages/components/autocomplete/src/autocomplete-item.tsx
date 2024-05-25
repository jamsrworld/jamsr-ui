import { Check } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { forwardRef, useId } from "react";

interface ItemProps {
  children: React.ReactNode;
  active?: boolean;
  selected?: boolean;
}

export const AutocompleteItem = forwardRef<
  HTMLDivElement,
  ItemProps & React.HTMLProps<HTMLDivElement>
>(({ children, active, className, selected, disabled, ...rest }, ref) => {
  const id = useId();
  return (
    <div
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      className={cn(
        "flex w-full cursor-pointer select-none items-center gap-2 rounded-md p-2 text-sm text-foreground hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-primary",
        className,
        {
          "bg-content1": active,
          "bg-content1/50": selected,
          "cursor-not-allowed opacity-90 hover:bg-transparent": disabled,
        },
      )}
      {...rest}
    >
      {children}
      {selected && <Check className="absolute right-2 bg-background  " />}
    </div>
  );
});
AutocompleteItem.displayName = "UI.AutocompleteItem";
