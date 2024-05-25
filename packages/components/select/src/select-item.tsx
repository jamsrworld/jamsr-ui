import { Check } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { forwardRef, type ComponentPropsWithoutRef, type ForwardedRef } from "react";
import { useSelectContext } from "./use-select-context";

type SelectItemProps<T extends string> = {
  value: T;
} & ComponentPropsWithoutRef<"div">;

export const SelectItemInner = <T extends string>(
  props: SelectItemProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    children,
    className,
    onClick: propOnClick,
    value,
    ...restProps
  } = props;
  const {
    setValue,
    value: inputValue,
    setOpen,
    multiple,
    closeOnSelection,
  } = useSelectContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    propOnClick?.(e);
    const getNewValue = () => {
      if (multiple && Array.isArray(inputValue)) {
        if (inputValue.includes(value)) {
          return inputValue.filter((item) => item !== value);
        }
        return [...inputValue, value];
      }
      return value;
    };
    setValue(getNewValue());
    if (closeOnSelection) setOpen(false);
  };

  const isSelected = Array.isArray(inputValue)
    ? inputValue.includes(value)
    : value === inputValue;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={ref}
      role="menuitem"
      tabIndex={-1}
      data-component="select-item"
      onClick={handleClick}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-md p-2 text-sm hover:bg-action-hover focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
      {...restProps}
    >
      {children}
      {isSelected && <Check className="absolute right-1" />}
    </div>
  );
};

export const SelectItem = forwardRef(SelectItemInner);
