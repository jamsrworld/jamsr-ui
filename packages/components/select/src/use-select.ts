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
import { useControlledState } from "@jamsr-ui/hooks";
import { cn, type PropGetter, type SlotsToClasses } from "@jamsr-ui/utils";
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
import { SelectItem } from "./select-item";
import type { SelectSlots, SelectVariantProps } from "./style";
import { selectVariant } from "./style";
import type { SelectContextType } from "./use-select-context";

export type SelectionSet = Set<string>;
type Props = {
  placement?: Placement;
  children: React.ReactNode;
  label?: string;
  placeholder?: string;
  isInvalid?: boolean;
  value?: SelectionSet;
  defaultValue?: SelectionSet;
  onValueChange?: (value: SelectionSet) => void;
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
};

export type UseSelectProps = Props & SelectVariantProps;

export const useSelect = (props: UseSelectProps) => {
  const {
    label,
    children,
    onValueChange,
    defaultValue,
    value: propValue,
    placeholder = "Select",
    className,
    classNames,
    isInvalid,
    color,
    size: propSize,
    onOpenChange,
    defaultOpen,
    open: propOpen,
    isMultiple = false,
    helperText,
    renderValue,
    placement = "bottom-start",
    startContent,
    endContent,
  } = props;

  const [value = new Set([]), setValue] = useControlledState({
    prop: propValue,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const [isOpen, setIsOpen] = useControlledState({
    prop: propOpen,
    onChange: onOpenChange,
    defaultProp: defaultOpen,
  });

  const childrenArray = Children.toArray(children);
  const selectItems = childrenArray.map((item) => {
    if (isValidElement<SelectItemProps>(item) && item.type === SelectItem) {
      return {
        value: item.props.value,
        children: item.props.children,
      };
    }
    return null;
  });
  const defaultSelectedLabel = useMemo(() => {
    const item = selectItems.find((item) => item && value.has(item.value));
    const label =
      item && typeof item.children === "string" ? item?.children : null;
    return label ? new Set([label]) : new Set([]);
  }, [selectItems, value]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabels, setSelectedLabels] =
    useState<SelectionSet>(defaultSelectedLabel);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const styles = selectVariant({
    className,
    color,
    size: propSize,
    isInvalid,
  });

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes("-"),
        // fallbackAxisSideDirection: isMultiple ? "end" : "none",
        padding: 10,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(50, availableHeight)}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const handleSelect = useCallback(
    (index: number | null) => {
      setSelectedIndex(index);
      if (index === null) return;
      const label = labelsRef.current[index];
      if (typeof label !== "string") return;

      if (!isMultiple) {
        setSelectedLabels(new Set([label]));
        setIsOpen(false);
        return;
      }

      const prev = new Set(selectedLabels);
      prev.has(label) ? prev.delete(label) : prev.add(label);
      setSelectedLabels(prev);
    },
    [isMultiple, selectedLabels, setIsOpen],
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
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role],
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

  const hasValue = value.size > 0;

  const getRenderValue = useMemo(() => {
    if (renderValue) return renderValue(Array.from(value));
    return Array.from(selectedLabels).join(",");
  }, [renderValue, selectedLabels, value]);

  const id = useId();
  const getBaseProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-component": "select",
      "data-slot": "base",
      className: styles.base({
        className: cn(classNames?.base, className),
      }),
      ...props,
    };
  };

  const getLabelProps: PropGetter<ComponentProps<"label">> = (props) => {
    return {
      "data-slot": "label",
      className: styles.label({ className: classNames?.label }),
      htmlFor: id,
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
      className: styles.trigger({ className: classNames?.trigger }),
      ...props,
      ...getReferenceProps({
        ref: setReference,
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

  const getContentProps: PropGetter<ComponentProps<"div">> = (props) => {
    return {
      "data-slot": "content",
      className: styles.content({ className: classNames?.content }),
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
    contextValue,
    startContent,
    endContent,
  };
};
