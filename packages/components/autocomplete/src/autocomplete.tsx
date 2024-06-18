import {
  autoUpdate,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import { Button } from "@jamsr-ui/button";
import { useControlledState } from "@jamsr-ui/hooks";
import { Input, inputVariants, type InputProps } from "@jamsr-ui/input";
import { ChevronDown } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useRef, useState } from "react";
import { AutocompleteItem } from "./autocomplete-item";

type GetProps<T, K> = Omit<T, keyof K> & K;

type Props<T extends Record<string | number, unknown>[]> = GetProps<
  InputProps,
  {
    options: T;
    getOptionValue: (option: T[number]) => string;
    getOptionLabel: (option: T[number]) => string;
    renderOption: (option: T[number]) => React.ReactNode;

    value?: string | null;
    defaultValue?: string;
    onValueChange?: (value: null | string) => void;

    inputValue?: string;
    defaultInputValue?: string;
    onInputValueChange?: (value: string) => void;

    classNames?: {
      wrapper?: string;
    };

    label: string;
    slotProps?: {
      input?: Partial<InputProps>;
    };
  }
>;

export { type Props as AutoCompleteProps };

export const AutoComplete = <T extends Record<string | number, unknown>[]>(
  props: Props<T>,
) => {
  const {
    classNames,
    defaultValue,
    onValueChange,
    value: propValue,
    inputValue: propInputValue,
    defaultInputValue,
    onInputValueChange,
    options,
    label,
    getOptionLabel,
    slotProps: slots,
    renderOption,
    getOptionValue,
    ...restProps
  } = props;

  const [inputValue = propValue ?? "", setInputValue] = useControlledState({
    defaultProp: defaultInputValue,
    prop: propInputValue,
    onChange: onInputValueChange,
  });

  const [value = null, setValue] = useControlledState<string | null>({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listRef = useRef<(HTMLElement | null)[]>([]);
  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(1),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 4,
      }),
    ],
  });

  const role = useRole(context, { role: "listbox" });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputValue(value);
    setValue(null);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  const items = options.filter((item) => {
    const label = getOptionLabel(item);
    return label.toLowerCase().startsWith(inputValue.toLowerCase());
  });

  const onSelect = (item: T[number]) => {
    const value = getOptionValue(item);
    setInputValue(value);
    setValue(value);
    setActiveIndex(null);
    setOpen(false);
  };

  const handleClickInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
    setIsFocused(true);
  };

  const handleToggleClick = () => {
    setOpen((open) => !open);
    setIsFocused(!open);
  };

  return (
    <>
      <Input
        {...restProps}
        label={label}
        endContent={
          <Button
            onClick={handleToggleClick}
            isIconOnly
            variant="light"
            rounded
          >
            <ChevronDown />
          </Button>
        }
        type="search"
        autoComplete="off"
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          value: inputValue,
          onClick: handleClickInput,
          "aria-autocomplete": "list",
          onInput() {
            setIsFocused(false);
          },
          onKeyDown(event) {
            if (
              event.key === "Enter" &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              const item = items?.[activeIndex];
              if (item) {
                onSelect(item);
              }
            }
          },
        })}
        {...slots?.input}
        className={inputVariants().input()}
      />
      {open && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <div
              className={cn(
                "z-popover border-divider bg-background shadow-card rounded-lg border focus:outline-none",
                classNames?.wrapper,
              )}
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles,
                  overflowY: "auto",
                },
              })}
            >
              {items.length === 0 && (
                <AutocompleteItem disabled>No results found</AutocompleteItem>
              )}
              {(isFocused && value ? options : items).map((item, index) => {
                const label = getOptionLabel(item);
                // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
                const _value = getOptionValue(item);
                return (
                  <AutocompleteItem
                    key={label}
                    {...getItemProps({
                      ref(node) {
                        listRef.current[index] = node;
                      },
                      onClick() {
                        onSelect(item);
                        refs.domReference.current?.focus();
                      },
                    })}
                    active={activeIndex === index}
                    selected={value === _value}
                  >
                    {renderOption(item)}
                  </AutocompleteItem>
                );
              })}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};
