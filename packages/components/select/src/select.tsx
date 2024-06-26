import { FloatingFocusManager, FloatingList } from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { cn } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
import { selectVariant, type SelectVariantProps } from "./style";
import { useSelect } from "./use-select";
import { SelectProvider, type SelectContextType } from "./use-select-context";

export type SelectProps<Value = string> = SelectVariantProps & {
  children: React.ReactNode;
  label: string | null;
  placeholder?: string;
  error?: boolean;
  value?: Value;
  defaultValue?: Value;
  onValueChange?: (value: Value) => void;
  getOptionLabel?: (value: string) => string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  multiple?: boolean;
  className?: string;
  closeOnSelection?: boolean;
  slots?: Partial<{
    trigger: JSX.Element;
  }>;
};

export const Select = <Value extends string | string[] = "">(
  props: SelectProps<Value>,
) => {
  const id = useId();
  const {
    label,
    children,
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder,
    className,
    error,
    color,
    size,
    onOpenChange,
    defaultOpen,
    open: propOpen,
    multiple,
    getOptionLabel = (value) => value,
    closeOnSelection = true,
    slots = {},
  } = props;

  const [value = (multiple ? [] : "") as Value, setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });
  const [open, setOpen] = useControlledState({
    prop: propOpen,
    onChange: onOpenChange,
    defaultProp: defaultOpen,
  });

  const styles = selectVariant({
    className,
    color,
    size,
  });

  const {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
    context,
    elementsRef,
    floatingStyles,
    getFloatingProps,
    getReferenceProps,
    labelsRef,
    selectedLabel,
    setFloating,
    setReference,
    isOpen,
  } = useSelect();

  const contextValue: SelectContextType = useMemo(() => {
    return {
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
    };
  }, [activeIndex, getItemProps, handleSelect, selectedIndex]);

  return (
    <div
      data-component="select"
      data-slot="wrapper"
      className={cn(styles.mainWrapper(), className)}
    >
      <button
        data-slot="trigger"
        type="button"
        className={styles.trigger()}
        ref={setReference}
        {...getReferenceProps()}
      >
        {selectedLabel ?? "Select..."}
      </button>
      <SelectProvider value={contextValue}>
        {isOpen && (
          <FloatingFocusManager
            context={context}
            modal
          >
            <div
              ref={setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              data-slot="popover"
              className={cn(
                "z-popover flex flex-col overflow-hidden rounded-2xl border border-divider bg-background shadow-card focus:outline-none",
                className,
              )}
            >
              <FloatingList
                elementsRef={elementsRef}
                labelsRef={labelsRef}
              >
                <div className="overflow-y-auto p-2">{children}</div>
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectProvider>
    </div>
  );
};
