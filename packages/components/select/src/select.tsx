/* eslint-disable no-unused-vars */
import { FloatingFocusManager, FloatingList } from "@floating-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useId, useMemo } from "react";
import type { UseSelectProps } from "./use-select";
import { useSelect } from "./use-select";
import { SelectProvider, type SelectContextType } from "./use-select-context";

export type SelectProps = UseSelectProps;

export const Select = (props: SelectProps) => {
  const id = useId();
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
    selectedLabels,
    setFloating,
    setReference,
    isOpen,
    value,
    styles,
    setValue,
    isMultiple,
    renderValue,
    className,
    label,
    placeholder,
    helperText,
    children,
  } = useSelect(props);

  const contextValue: SelectContextType = useMemo(() => {
    return {
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
      setValue,
      isMultiple,
      value,
    };
  }, [
    activeIndex,
    getItemProps,
    handleSelect,
    isMultiple,
    selectedIndex,
    setValue,
    value,
  ]);

  const getRenderValue = useMemo(() => {
    if (renderValue) return renderValue(Array.from(value));
    return Array.from(selectedLabels).join(",");
  }, [renderValue, selectedLabels, value]);

  return (
    <div
      data-component="select"
      data-slot="wrapper"
      className={cn(styles.mainWrapper(), className)}
    >
      <label className={styles.label()} htmlFor={id}>
        {label}
      </label>
      <button
        id={id}
        data-slot="trigger"
        type="button"
        className={styles.trigger()}
        ref={setReference}
        {...getReferenceProps()}
      >
        {value.size ? (
          <div className={styles.value()}>{getRenderValue}</div>
        ) : (
          <span className={styles.placeholder()}>{placeholder}</span>
        )}
      </button>
      <SelectProvider value={contextValue}>
        {isOpen && (
          <FloatingFocusManager context={context} modal>
            <div
              ref={setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              data-slot="popover"
              className={cn(
                "z-popover flex flex-col  overflow-hidden rounded-2xl border border-divider bg-background shadow-card focus:outline-none",
                className,
              )}
            >
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                <div className="overflow-y-auto p-2">{children}</div>
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </SelectProvider>
      {helperText && (
        <div data-slot="helper-text" className={styles.helperText()}>
          {helperText}
        </div>
      )}
    </div>
  );
};
