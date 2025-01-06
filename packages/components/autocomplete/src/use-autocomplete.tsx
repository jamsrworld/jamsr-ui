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
  mapPropsVariants,
  mergeGlobalProps,
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
import type { AutocompleteSlots } from "./styles";
import { autocompleteVariant } from "./styles";
import type { AutocompleteContextType } from "./use-autocomplete-context";

export type UseAutocompleteProps = Pick<
  InputProps,
  | "label"
  | "startContent"
  | "endContent"
  | "placeholder"
  | "helperText"
  | "isInvalid"
  | "onBlur"
  | "isDisabled"
  | "radius"
> & {
  className?: string;
  classNames?: SlotsToClasses<AutocompleteSlots>;
  placement?: Placement;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  isMultiple?: boolean;
  children: React.ReactNode;
  inputProps?: Partial<InputProps>;
};

export const useAutocomplete = ($props: UseAutocompleteProps) => {
  const { autocomplete: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    autocompleteVariant.variantKeys,
  );
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
    isDisabled,
    onBlur,
  } = props;
  const baseRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  const [isFocused, setIsFocused] = useState(false);
  const [value = [], setValue] = useControlledState(
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
        const $value = new Set(value);
        if ($value.has(newValue)) {
          $value.delete(newValue);
          return [...$value];
        }
        $value.add(newValue);
        return [...$value];
      }
      return [newValue];
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
    ...variantProps,
  });

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      setIsOpen(true);
      setIsFocused(false);
      setActiveIndex(0);
    },
    [setIsOpen],
  );

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
  const dismiss = useDismiss(context, {
    outsidePress: (event) => {
      const element = event.target as HTMLElement | null;
      const isLabel =
        baseRef.current?.contains(element) && element?.dataset.slot === "label";
      return !isLabel;
    },
  });
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

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const preventMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  const contextValue: AutocompleteContextType = useMemo(() => {
    return {
      activeIndex,
      getItemProps,
      handleSelect,
      setValue,
      isMultiple,
      value,
      setInputValue,
      styles,
      focusInput,
    };
  }, [
    activeIndex,
    getItemProps,
    handleSelect,
    isMultiple,
    setValue,
    styles,
    value,
    focusInput,
  ]);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && activeIndex !== null) {
        event.preventDefault();
        const indexItem = renderedItems[activeIndex];
        if (!indexItem) return;
        handleSelect({
          label: indexItem.label,
          value: indexItem.value,
        });
      }
    },
    [activeIndex, handleSelect, renderedItems],
  );

  const getBaseProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-component": "autocomplete",
      "data-slot": "base",
      className: styles.base({
        className: cn(classNames?.base, className),
      }),
      ref: baseRef,
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

  const getContentProps: PropGetter<ComponentProps<"ul">> = (props) => {
    return {
      "data-slot": "content",
      className: styles.content({ className: classNames?.content }),
      onMouseDown: preventMouseDown,
      ...props,
    };
  };

  const getEmptyContentProps: PropGetter<ComponentProps<"li">> = (props) => {
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
      setValue([]);
    },
    [setValue],
  );

  const hasValue = useMemo(() => {
    if (isMultiple) return value.length > 0;
    return inputValue.length > 0;
  }, [inputValue.length, isMultiple, value.length]);

  const getInputProps: PropGetter<InputProps> = useCallback(() => {
    return {
      label,
      startContent,
      endContent,
      placeholder,
      helperText,
      isInvalid,
      radius: variantProps.radius,
      ...inputProps,
      "data-slot": "input",
      value: inputValue,
      onValueChange: handleInputChange,
      type: "search",
      autoComplete: "off",
      children: isMultiple ? selectedItemsContent : null,
      inputWrapperRef: setReference,
      classNames: {
        ...inputProps?.classNames,
        inputWrapper: "select-none",
        contentWrapper: cn("h-auto flex-wrap gap-1", {
          "p-1": isMultiple,
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
      isDisabled,
      onBlur,
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
    isDisabled,
    isInvalid,
    isMultiple,
    label,
    onBlur,
    onClearInput,
    placeholder,
    selectedItemsContent,
    setReference,
    startContent,
    variantProps.radius,
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
