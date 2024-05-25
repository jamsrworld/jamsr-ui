import { Chip } from "@jamsr-ui/chip";
import { useControlledState } from "@jamsr-ui/hooks";
import { Popover } from "@jamsr-ui/popover";
import { ChevronDown } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
import { selectVariant, type SelectVariantProps } from "./style";
import { SelectProvider, type SelectContextType } from "./use-select-context";

export type SelectProps<Value = unknown> = SelectVariantProps & {
  children: React.ReactNode;
  label: string | null;
  placeholder?: string;
  error?: boolean;
  value?: Value;
  defaultValue?: Value;
  onValueChange?: (value: NonNullable<SelectProps<Value>["value"]>) => void;
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
    ...restProps
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

  const renderValue = () => {
    if (Array.isArray(value)) {
      return value.map((item) => {
        return <Chip key={item}>{getOptionLabel(item)}</Chip>;
      });
    }
    return getOptionLabel(value);
  };

  const triggerComp = slots.trigger ?? (
    <button
      type="button"
      className={styles.trigger()}
      {...restProps}
    >
      {value ? (
        <div className={styles.value()}>{renderValue()}</div>
      ) : (
        <span className={styles.placeholder()}>{placeholder}</span>
      )}
      <ChevronDown className="shrink-0" />
    </button>
  );

  const contextValue = useMemo(() => {
    return {
      setValue,
      setOpen,
      multiple,
      value,
      closeOnSelection,
    } as SelectContextType;
  }, [closeOnSelection, multiple, setOpen, setValue, value]);

  return (
    <SelectProvider value={contextValue}>
      <div
        data-component="select"
        className={cn(styles.mainWrapper(), className)}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <Popover
          open={open}
          onOpenChange={setOpen}
          trigger={triggerComp}
          placement="bottom-start"
          applyWidth
          className="p-1"
        >
          {children}
        </Popover>
      </div>
    </SelectProvider>
  );
};
