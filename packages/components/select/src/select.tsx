import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from "@floating-ui/react";
import { ChevronDownIcon } from "@jamsr-ui/shared-icons";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { m, AnimatePresence } from "framer-motion";
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
  } = useSelect(props);

  return (
    <Component {...getBaseProps()}>
      {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {label && <label {...getLabelProps()}>{label}</label>}
      <div {...getMainWrapperProps()}>
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
              <ChevronDownIcon />
            </span>
          </div>
        </button>
        <SelectProvider value={contextValue}>
          <AnimatePresence>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager context={context} modal>
                  <div {...getPopoverProps()}>
                    <FloatingList
                      elementsRef={elementsRef}
                      labelsRef={labelsRef}
                    >
                      {/* @ts-expect-error framer-error */}
                      <m.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        {...getContentProps()}
                      >
                        <div {...getScrollAreaProps()}>{children}</div>
                      </m.div>
                    </FloatingList>
                  </div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </AnimatePresence>
        </SelectProvider>
        {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
      </div>
    </Component>
  );
};
