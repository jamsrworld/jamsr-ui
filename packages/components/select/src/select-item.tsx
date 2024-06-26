import { useListItem } from "@floating-ui/react";
import { Check } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";
import { useSelectContext } from "./use-select-context";

type SelectItemProps<T extends string> = {
  value: T;
} & ComponentPropsWithoutRef<"button">;

export const SelectItem = <T extends string>(props: SelectItemProps<T>) => {
  const {
    children,
    className,
    onClick: propOnClick,
    value,
    ...restProps
  } = props;
  const { activeIndex, selectedIndex, getItemProps, handleSelect } =
    useSelectContext();

  const { ref, index } = useListItem({ label: children });
  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <button
      ref={ref}
      type="button"
      data-slot="item"
      role="option"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl p-2 text-sm hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-primary",
        className,
        { "bg-action-hover": isActive },
      )}
      {...getItemProps({
        onClick: () => handleSelect(index),
      })}
    >
      {children}
      {isSelected && <Check className="absolute right-1" />}
    </button>
  );
};
