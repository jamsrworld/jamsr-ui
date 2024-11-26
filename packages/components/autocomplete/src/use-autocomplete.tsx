/* eslint-disable @typescript-eslint/unbound-method */
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
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  type PropGetter,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import React, {
  Children,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AutocompleteItemProps } from "./autocomplete-item";
import type { AutocompleteSlots } from "./style";
import { autocompleteVariant } from "./style";
import type { AutocompleteContextType } from "./use-autocomplete-context";

export type SelectionSet = Set<string>;

export type UseAutocompleteProps = Pick<
  InputProps,
  | "label"
  | "startContent"
  | "endContent"
  | "placeholder"
  | "helperText"
  | "isInvalid"
  | "onBlur"
> & {
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
  inputProps?: Partial<InputProps>;
};

export const useAutocomplete = ($props: UseAutocompleteProps) => {
  const { autocomplete: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
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
    startContent,
    endContent,
    placeholder,
    helperText,
    isInvalid,
    children,
    inputProps,
  } = props;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  const [isFocused, setIsFocused] = useState(false);
  const [value = new Set([]), setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const childrenArray = Children.toArray(children);
  const allItems = childrenArray.map((item) => {
    if (isValidElement<AutocompleteItemProps>(item)) {
      return {
        value: item.props.value,
        children: item.props.children,
        renderLabel: item.props.renderLabel,
        label:
          item.props.label ??
          (typeof item.props.children === "string" ? item.props.children : ""),
        autocompleteItem: item,
      };
    }
    return null;
  });

  const getNewValue = useCallback(
    (newValue: string) => {
      if (isMultiple) {
        const prev = new Set(value);
        if (value.has(newValue)) {
          prev.delete(newValue);
          return prev;
        }
        prev.add(newValue);
        return prev;
      }
      return new Set([newValue]);
    },
    [isMultiple, value],
  );

  const selectedItemsContent = useMemo(() => {
    const selectedValues = Array.from(value);
    if (!isMultiple) {
      const label =
        allItems.find((item) => item?.value === selectedValues[0])?.label ?? "";
      return label;
    }

    return selectedValues.map((val) => {
      const item = allItems.find((item) => item?.value === val);
      const label =
        item?.renderLabel ??
        item?.label ??
        ((typeof children === "string" && children) || "");

      const onClose = () => setValue(getNewValue(val));

      const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      };

      return (
        <Chip onClick={handleOnClick} onDelete={onClose} key={val}>
          {label}
        </Chip>
      );
    });
  }, [allItems, children, getNewValue, isMultiple, setValue, value]);

  const [isOpen = false, setIsOpen] = useControlledState(
    defaultOpen,
    propOpen,
    onOpenChange,
  );

  const [inputValue, setInputValue] = useState(
    !isMultiple && typeof selectedItemsContent === "string"
      ? selectedItemsContent
      : "",
  );

  const filteredItems = allItems.filter((item) =>
    item?.label.toLowerCase().startsWith(inputValue.toLowerCase()),
  );
  const renderedItems = isFocused ? allItems : filteredItems;
  const childrenToRender = renderedItems.map(
    (item) => item?.autocompleteItem ?? null,
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const styles = autocompleteVariant({
    className,
  });

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setIsOpen(true);
    setIsFocused(false);
    setActiveIndex(0);
  };

  const handleToggleOpen = useCallback(() => {
    setIsFocused(true);
    setIsOpen((open) => !open);
  }, [setIsOpen]);

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
        padding: 0,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(50, Math.min(400, availableHeight))}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 0,
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
      setValue(getNewValue(args.value));
    },
    [activeIndex, getNewValue, isFocused, isMultiple, setIsOpen, setValue],
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

  const onClearInput = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      inputRef.current?.focus();
      setValue(new Set([]));
    },
    [setValue],
  );

  const hasValue = useMemo(() => {
    if (isMultiple) return value.size > 0;
    return inputValue.length > 0;
  }, [inputValue.length, isMultiple, value.size]);

  const getInputProps: PropGetter<InputProps> = useCallback(() => {
    return {
      label,
      startContent,
      endContent,
      placeholder,
      helperText,
      isInvalid,
      ...inputProps,
      "data-slot": "input",
      value: inputValue,
      onValueChange: handleInputChange,
      type: "search",
      autoComplete: "off",
      children: isMultiple ? selectedItemsContent : null,
      inputWrapperRef: setReference,
      classNames: {
        inputWrapper: "select-none",
        contentWrapper: cn("h-auto flex-wrap gap-1", {
          "px-1": isMultiple,
        }),
      },
      isClearable: true,
      onClearInput,
      showClearButton: hasValue,
      slotProps: {
        inputWrapper: {
          onClick: handleToggleOpen,
        },
      },
      ...getReferenceProps({
        onKeyDown: handleInputKeyDown,
        ref: inputRef,
      }),
    };
  }, [
    endContent,
    getReferenceProps,
    handleInputChange,
    handleInputKeyDown,
    handleToggleOpen,
    hasValue,
    helperText,
    inputProps,
    inputValue,
    isInvalid,
    isMultiple,
    label,
    onClearInput,
    placeholder,
    selectedItemsContent,
    setReference,
    startContent,
  ]);

  return {
    context,
    elementsRef,
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
