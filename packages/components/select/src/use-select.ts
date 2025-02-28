import type { Placement } from "@floating-ui/react";
import {
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import {
  useControlledState,
  useHover,
  useIsDisabled,
  useMergeRefs,
} from "@jamsr-ui/hooks";
import { useUIConfig } from "@jamsr-ui/config";
import type { PropGetter, SlotsToClasses, UIProps } from "@jamsr-ui/utils";
import {
  cn,
  dataAttr,
  deepMergeProps,
  formLabelProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import {
  Children,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { SelectItemProps } from "./select-item";
import type { SelectSlots, SelectVariantProps } from "./styles";
import { selectVariant } from "./styles";
import type { SelectContextType } from "./use-select-context";

type Props = SelectVariantProps & {
  placement?: Placement;
  label?: string;
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  isMultiple?: boolean;
  className?: string;
  classNames?: SlotsToClasses<SelectSlots>;
  helperText?: React.ReactNode;
  renderValue?: (value: string[]) => React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  returnFocus?: boolean;
  isFormControl?: boolean;
  onUncontrolledValueChange?: (values: string[]) => void;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  disableTypeahead?: boolean;
};

export type UseSelectInnerProps = Props;
export type UseSelectProps = UIProps<"div", Props>;

export const useSelect = ($props: UseSelectProps) => {
  const { select: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    selectVariant.variantKeys,
  );

  const {
    label,
    children,
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder = "Select",
    className,
    classNames,
    onOpenChange,
    defaultOpen,
    open: propOpen,
    isMultiple = false,
    helperText,
    renderValue,
    placement = "bottom-start",
    startContent,
    endContent,
    as,
    isDisabled: propIsDisabled = false,
    returnFocus = true,
    isFormControl = false,
    disableTypeahead = false,
    onUncontrolledValueChange,
    topContent,
    bottomContent,
    ...restProps
  } = props;

  const Component = as ?? "div";
  const [value = [], setValue] = useControlledState(
    defaultValue,
    propValue,
    onValueChange,
  );
  const [isOpen, setIsOpen] = useControlledState(
    defaultOpen,
    propOpen,
    onOpenChange,
  );
  const id = useId();
  const baseRef = useRef<HTMLDivElement>(null);

  const { isDisabled, ref: disableRef } = useIsDisabled({
    isDisabled: propIsDisabled,
    isFormControl,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });

  const childrenArray = Children.toArray(children);
  const selectItems = childrenArray.map((item) => {
    if (isValidElement<SelectItemProps>(item)) {
      return {
        value: item.props.value,
        children: item.props.children,
        label: item.props.label,
      };
    }
    return null;
  });

  const selectedLabels = useMemo(() => {
    const items = selectItems
      .filter((item) => item && new Set(value).has(item.value))
      .map(
        (item) =>
          item?.label ??
          (typeof item?.children === "string"
            ? item.children
            : (item?.value ?? "")),
      );
    return new Set(items);
  }, [selectItems, value]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const styles = selectVariant({
    ...variantProps,
    className,
  });

  const {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(2),
      flip({
        crossAxis: placement.includes("-"),
        // fallbackAxisSideDirection: isMultiple ? "end" : "none",
        padding: 0,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            height: `${rects.floating.height}px`,
            maxHeight: `${Math.max(50, Math.min(rects.floating.height, 400, availableHeight))}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 0,
      }),
    ],
  });
  const mergedRefs = useMergeRefs([hoverRef, disableRef, setReference]);

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      if (index === null) return;
      if (!isMultiple) {
        setIsOpen(false);
      }
    },
    [isMultiple, setIsOpen],
  );

  function handleTypeaheadMatch(index: number | null) {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  }

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
    virtual: disableTypeahead === true,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
    enabled: !disableTypeahead,
  });
  const click = useClick(context);
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
    [listNav, typeahead, click, dismiss, role],
  );

  const onSelectValue = useCallback(
    (_value: string) => {
      const values = value;
      const getNewValue = (): string[] => {
        if (!isMultiple) return [_value];
        const $value = new Set(values);
        if ($value.has(_value)) {
          $value.delete(_value);
          return [...$value];
        }
        $value.add(_value);
        return [...$value];
      };
      const newValue = getNewValue();
      onUncontrolledValueChange?.(newValue);
      setValue(newValue);
    },
    [isMultiple, onUncontrolledValueChange, setValue, value],
  );

  const contextValue: SelectContextType = useMemo(() => {
    return {
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
      setValue,
      isMultiple,
      value,
      styles,
      classNames,
      onSelectValue,
    };
  }, [
    activeIndex,
    classNames,
    getItemProps,
    handleSelect,
    isMultiple,
    onSelectValue,
    selectedIndex,
    setValue,
    styles,
    value,
  ]);
  const hasValue = value.length > 0;

  const getRenderValue = useMemo(() => {
    if (renderValue) return renderValue(Array.from(value));
    return Array.from(selectedLabels).join(",");
  }, [renderValue, selectedLabels, value]);

  const preventMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  const getBaseProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-component": "select",
      "data-slot": "base",
      "data-open": dataAttr(isOpen),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      ...props,
      className: styles.base({
        className: cn(classNames?.base, className),
      }),
      ref: baseRef,
      ...restProps,
    };
  };

  const getIndicatorProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "indicator",
      className: styles.indicator({ className: classNames?.indicator }),
      ...props,
    };
  };

  const getLabelProps: PropGetter<ComponentProps<"label">> = (props) => {
    return {
      "data-slot": "label",
      className: styles.label({ className: classNames?.label }),
      htmlFor: id,
      ...formLabelProps(),
      ...props,
    };
  };

  const getMainWrapperProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "main-wrapper",
      className: styles.mainWrapper({ className: classNames?.mainWrapper }),
      ...props,
    };
  };

  const getInnerWrapperProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "inner-wrapper",
      className: styles.innerWrapper({ className: classNames?.innerWrapper }),
      ...props,
    };
  };

  const getTriggerProps: PropGetter<ComponentProps<"button">> = (props) => {
    return {
      "data-slot": "trigger",
      type: "button",
      id,
      className: styles.trigger({
        className: cn(classNames?.trigger, {
          "h-auto": isMultiple,
        }),
      }),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
      ...props,
      ...getReferenceProps({
        ref: mergedRefs,
      }),
    };
  };

  const getValueProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "value",
      className: styles.value({ className: classNames?.value }),
      ...props,
    };
  };

  const getPlaceholderProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "placeholder",
      className: styles.placeholder({ className: classNames?.placeholder }),
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

  const getContentProps: PropGetter = (props) => {
    return {
      "data-slot": "content",
      className: styles.content({ className: classNames?.content }),
      onMouseDown: preventMouseDown,
      ...props,
    };
  };

  const getScrollAreaProps: PropGetter<ComponentProps<"ul">> = (props) => {
    return {
      "data-slot": "scroll-area",
      className: styles.scrollArea({ className: classNames?.scrollArea }),
      ...props,
    };
  };

  const getHelperTextProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "helper-text",
      className: styles.helperText({ className: classNames?.helperText }),
      ...props,
    };
  };

  const getStartContentProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "start-content",
      className: styles.startContent({ className: classNames?.startContent }),
      ...props,
    };
  };

  const getEndContentProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "end-content",
      className: styles.endContent({ className: classNames?.endContent }),
      ...props,
    };
  };

  return {
    Component,
    returnFocus,
    context,
    elementsRef,
    labelsRef,
    isOpen,
    hasValue,
    label,
    placeholder,
    helperText,
    children,
    getRenderValue,
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
    getIndicatorProps,
    getScrollAreaProps,
    contextValue,
    startContent,
    endContent,
    topContent,
    bottomContent,
  };
};
