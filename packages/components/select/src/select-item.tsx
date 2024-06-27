import { useListItem } from "@floating-ui/react";
import { Check } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";
import { useSelectContext } from "./use-select-context";

type SelectItemProps<T extends string> = {
  value: T;
} & ComponentPropsWithoutRef<"button">;

export const SelectItem = <T extends string>(props: SelectItemProps<T>) => {
  const { children, className, value } = props;
  const {
    activeIndex,
    getItemProps,
    handleSelect,
    setValue,
    isMultiple,
    value: inputValue,
  } = useSelectContext();

  const { ref, index } = useListItem({
    label: typeof children === "string" ? children : "",
  });
  const isActive = activeIndex === index;

  const isSelected = inputValue.has(value);

  const handleClick = () => {
    const getNewValue = () => {
      if (isMultiple) {
        const prev = new Set(inputValue);
        if (inputValue.has(value)) {
          prev.delete(value);
          return prev;
        }
        prev.add(value);
        return prev;
      }
      return new Set([value]);
    };

    setValue(getNewValue());
  };

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
        onClick: () => {
          handleClick();
          handleSelect(index);
        },
      })}
    >
      {children}
      {isSelected && <Check className="absolute right-1" />}
    </button>
  );
};
