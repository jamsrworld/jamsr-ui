import { useListItem } from "@floating-ui/react";
import { Check } from "@jamsr-ui/shared-icons";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useAutocompleteContext } from "./use-autocomplete-context";

type Props = {
  value: string;
  label?: string;
};

export type AutocompleteItemProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, Props>;

export const AutocompleteItem = <T extends React.ElementType = "button">(
  props: AutocompleteItemProps<T>,
) => {
  const { children, className, value, as, label, ...restProps } = props;
  const {
    activeIndex,
    getItemProps,
    handleSelect,
    value: valueSet,
  } = useAutocompleteContext();

  const listLabel = label ?? (typeof children === "string" ? children : "");

  if (!listLabel.length) {
    console.warn(`No label provided for list item with value ${value}`);
  }

  const { ref, index } = useListItem({
    label: listLabel,
  });
  const isActive = activeIndex === index;
  const isSelected = valueSet.has(value);
  const Component = as ?? "button";

  return (
    <Component
      ref={ref}
      type="button"
      data-slot="item"
      role="option"
      aria-selected={isSelected}
      tabIndex={-1}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl p-2 text-sm hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-primary",
        className,
        { "bg-action-hover": isActive },
      )}
      {...restProps}
      {...getItemProps({
        onClick: () => {
          handleSelect({ label: listLabel, value });
        },
      })}
    >
      {children}
      {isSelected && <Check className="absolute right-1" />}
    </Component>
  );
};
