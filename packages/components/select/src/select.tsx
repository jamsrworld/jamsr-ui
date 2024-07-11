import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from "@floating-ui/react";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import type { UseSelectInnerProps } from "./use-select";
import { useSelect } from "./use-select";
import { SelectProvider } from "./use-select-context";

export type SelectProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, UseSelectInnerProps>;

export const Select = <T extends React.ElementType = "div">(
  props: SelectProps<T>,
) => {
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
    Component,
  } = useSelect(props);

  return (
    <Component {...getBaseProps()}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {label && <label {...getLabelProps()}>{label}</label>}
      <div {...getMainWrapperProps()}>
        {/*  eslint-disable-next-line react/button-has-type */}
        <button {...getTriggerProps()}>
          <div {...getInnerWrapperProps()}>
            {startContent && (
              <div {...getStartContentProps()}>{startContent}</div>
            )}
            {hasValue ? (
              <div {...getValueProps()}>{getRenderValue}</div>
            ) : (
              <span {...getPlaceholderProps()}>{placeholder}</span>
            )}
            {endContent && <div {...getEndContentProps()}>{endContent}</div>}
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
    </Component>
  );
};