import { Check } from "@jamsr-ui/shared-icons";
import { ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
import { useId } from "react";

interface AutocompleteItemProps {
  children: React.ReactNode;
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export const AutocompleteItem = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, AutocompleteItemProps>,
) => {
  const { children, active, className, selected, disabled, ...rest } = props;
  const id = useId();
  return (
    <div
      data-slot="item"
      role="option"
      id={id}
      aria-selected={active}
      className={cn(
        "text-foreground hover:bg-action-hover focus-visible:ring-primary flex w-full cursor-pointer select-none items-center gap-2 rounded-md p-2 text-sm focus-visible:ring-2",
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
      {selected && <Check className="bg-background absolute right-2  " />}
    </div>
  );
};
