import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from "@floating-ui/react";
import { ChevronDownIcon } from "@jamsr-ui/shared-icons";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "motion/react";
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
    getIndicatorProps,
    getScrollAreaProps,
    returnFocus,
    bottomContent,
    topContent,
    errorMessage,
    getErrorMessageProps,
    isInvalid,
  } = useSelect(props);

  return (
    <Component {...getBaseProps()}>
      <div {...getMainWrapperProps()}>
        {label && <label {...getLabelProps()}>{label}</label>}
        <button type="button" {...getTriggerProps()}>
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
            <span {...getIndicatorProps()}>
              <ChevronDownIcon width={16} height={16} />
            </span>
          </div>
        </button>
        <SelectProvider value={contextValue}>
          <AnimatePresence>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal
                  returnFocus={returnFocus}
                  initialFocus={-1}
                >
                  <div {...getPopoverProps()}>
                    <m.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      {...getContentProps()}
                    >
                      {topContent}
                      <FloatingList
                        elementsRef={elementsRef}
                        labelsRef={labelsRef}
                      >
                        <ul {...getScrollAreaProps()}>{children}</ul>
                      </FloatingList>
                      {bottomContent}
                    </m.div>
                  </div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </AnimatePresence>
        </SelectProvider>
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
      {isInvalid && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
};
