import { FloatingFocusManager, FloatingList, FloatingPortal } from "@floating-ui/react";
import type { UseSelectProps } from "./use-select";
import { useSelect } from "./use-select";
import { SelectProvider } from "./use-select-context";

export type SelectProps = UseSelectProps;

export const Select = (props: SelectProps) => {
  const {
    context,
    elementsRef,
    labelsRef,
    isOpen,
    hasValue,
    label,
    placeholder,
    helperText,
    children,
    getBaseProps,
    getLabelProps,
    getMainWrapperProps,
    getInnerWrapperProps,
    getTriggerProps,
    getValueProps,
    getPlaceholderProps,
    getPopoverProps,
    getContentProps,
    getHelperTextProps,
    getStartContentProps,
    getEndContentProps,
    contextValue,
    getRenderValue,
    startContent,
    endContent,
  } = useSelect(props);

  return (
    <div {...getBaseProps()}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {label && <label {...getLabelProps()}>{label}</label>}
      <div {...getMainWrapperProps()}>
        {/*  eslint-disable-next-line react/button-has-type */}
        <button {...getTriggerProps()}>
          <div {...getInnerWrapperProps()}>
            <div {...getStartContentProps()}>{startContent}</div>
            {hasValue ? (
              <div {...getValueProps()}>{getRenderValue}</div>
            ) : (
              <span {...getPlaceholderProps()}>{placeholder}</span>
            )}
            <div {...getEndContentProps()}>{endContent}</div>
          </div>
        </button>
        <SelectProvider value={contextValue}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal>
                <div {...getPopoverProps()}>
                  <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                    <div {...getContentProps()}>{children}</div>
                  </FloatingList>
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </SelectProvider>
        {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
      </div>
    </div>
  );
};
