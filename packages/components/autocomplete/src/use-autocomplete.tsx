import type { Placement } from "@floating-ui/react";
import {
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import { Chip } from "@jamsr-ui/chip";
import { useControlledState } from "@jamsr-ui/hooks";
import type { InputProps } from "@jamsr-ui/input";
import { cn, type PropGetter, type SlotsToClasses } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import {
  Children,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AutocompleteItemProps } from "./autocomplete-item";
import { AutocompleteItem } from "./autocomplete-item";
import type { AutocompleteSlots } from "./style";
import { autocompleteVariant } from "./style";
import type { AutocompleteContextType } from "./use-autocomplete-context";

export type SelectionSet = Set<string>;

export type UseAutocompleteProps = Pick<InputProps, "label"> & {
  className?: string;
  classNames?: SlotsToClasses<AutocompleteSlots>;
  placement?: Placement;
  value?: SelectionSet;
  defaultValue?: SelectionSet;
  onValueChange?: (value: SelectionSet) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  isMultiple?: boolean;
  children: React.ReactNode;
};

export const useAutocomplete = (props: UseAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    className,
    classNames,
    defaultOpen,
    defaultValue,
    isMultiple = false,
    onOpenChange,
    onValueChange,
    open: propOpen,
    placement = "bottom-start",
    value: propValue,
    label,
    children,
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  const [isFocused, setIsFocused] = useState(false);
  const [value = new Set([]), setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const [isOpen = false, setIsOpen] = useControlledState({
    prop: propOpen,
    onChange: onOpenChange,
    defaultProp: defaultOpen,
  });

  const childrenArray = Children.toArray(children);
  const allItems = childrenArray.map((item) => {
    if (
      isValidElement<AutocompleteItemProps>(item) &&
      item.type === AutocompleteItem
    ) {
      return {
        value: item.props.value,
        children: item.props.children,
        label:
          item.props.label ??
          (typeof item.props.children === "string" ? item.props.children : ""),
        autocompleteItem: item,
      };
    }
    return null;
  });

  const filteredItems = allItems.filter((item) =>
    item?.label.toLowerCase().startsWith(inputValue.toLowerCase()),
  );

  const renderedItems = isFocused ? allItems : filteredItems;

  const childrenToRender = renderedItems.map(
    (item) => item?.autocompleteItem ?? null,
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

  const styles = autocompleteVariant({
    className,
  });

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setIsOpen(true);
    setIsFocused(false);
    setActiveIndex(0);
  };

  const handleToggleOpen = () => {
    setIsFocused(true);
    setIsOpen((open) => !open);
  };

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: handleToggleOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(2),
      flip({
        crossAxis: placement.includes("-"),
        padding: 10,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(50, availableHeight)}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, dismiss, role],
  );

  const handleSelect = useCallback(
    (args: { value: string; label: string }) => {
      if (isFocused && activeIndex !== null) setSelectedIndex(activeIndex);

      if (!isMultiple) {
        setInputValue(args.label);
        setIsOpen(false);
      }

      if (isMultiple) {
        setInputValue("");
        inputRef.current?.focus();
      }

      const getNewValue = () => {
        if (isMultiple) {
          const prev = new Set(value);
          if (value.has(args.value)) {
            prev.delete(args.value);
            return prev;
          }
          prev.add(args.value);
          return prev;
        }
        return new Set([args.value]);
      };

      setValue(getNewValue());
    },
    [activeIndex, isFocused, isMultiple, setIsOpen, setValue, value],
  );

  const contextValue: AutocompleteContextType = useMemo(() => {
    return {
      activeIndex,
      getItemProps,
      handleSelect,
      setValue,
      isMultiple,
      value,
      setInputValue,
    };
  }, [activeIndex, getItemProps, handleSelect, isMultiple, setValue, value]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && activeIndex !== null) {
      const indexItem = renderedItems[activeIndex];
      if (!indexItem) return;
      handleSelect({
        label: indexItem.label,
        value: indexItem.value,
      });
    }
  };

  const getBaseProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-component": "autocomplete",
      "data-slot": "base",
      className: styles.base({
        className: cn(classNames?.base, className),
      }),
      ...props,
    };
  };

  const getPopoverProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "popover",
      ref: setFloating,
      style: floatingStyles,
      className: styles.popover({ className: classNames?.popover }),
      ...getFloatingProps(),
      ...props,
    };
  };

  const getContentProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "content",
      className: styles.content({ className: classNames?.content }),
      ...props,
    };
  };

  const getEmptyContentProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "empty-content",
      className: styles.emptyContent({ className: classNames?.emptyContent }),
      ...props,
    };
  };
  const selectedItemsContent = !isMultiple ? null : (
    <div className="flex gap-1">
      {Array.from(value).map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  );

  const getInputProps: PropGetter<InputProps> = () => {
    return {
      "data-slot": "input",
      label,
      value: inputValue,
      onValueChange: handleInputChange,
      type: "search",
      autoComplete: "off",
      startContent: selectedItemsContent,
      baseRef: setReference,
      ...getReferenceProps({
        onKeyDown: handleInputKeyDown,
        onClick: handleToggleOpen,
        ref: inputRef,
      }),
    };
  };

  return {
    context,
    elementsRef,
    labelsRef,
    isOpen,
    getBaseProps,
    getInputProps,
    getPopoverProps,
    getContentProps,
    contextValue,
    childrenToRender,
    getEmptyContentProps,
  };
};
