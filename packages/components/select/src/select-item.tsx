import { useListItem } from "@floating-ui/react";
import { CheckIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { useSelectContext } from "./use-select-context";

type Props = {
  value: string;
  label?: string;
};

export type SelectItemProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, Props>;

export const SelectItem = <T extends React.ElementType = "button">(
  $props: SelectItemProps<T>,
) => {
  const { selectItem: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { children, className, value, as, label, ...restProps } = props;
  const {
    activeIndex,
    getItemProps,
    handleSelect,
    setValue,
    isMultiple,
    value: inputValue,
  } = useSelectContext();

  // eslint-disable-next-line no-nested-ternary
  const listLabel =
    label ?? (typeof children === "string" ? children : undefined);

  if (!listLabel) {
    console.warn(`No label provided for list item with value ${value}`);
  }

  const { ref, index } = useListItem({
    label: listLabel,
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

  const Component = as ?? "button";

  return (
    <Component
      ref={ref}
      type="button"
      data-slot="item"
      role="option"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl p-2 text-sm hover:bg-content2 focus-visible:ring-2 focus-visible:ring-primary",
        className,
        { "bg-content2": isActive },
      )}
      {...restProps}
      {...getItemProps({
        onClick: () => {
          handleClick();
          handleSelect(index);
        },
      })}
    >
      {children}
      {isSelected && <CheckIcon className="absolute right-1" />}
    </Component>
  );
};
