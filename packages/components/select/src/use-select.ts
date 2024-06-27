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
import { useCallback, useRef, useState } from "react";
import { selectVariant, type SelectVariantProps } from "./style";

export type SelectionSet = Set<number | string>;

type Props = {
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
  helperText?: React.ReactNode;
  renderValue?: (value: SelectionSet) => React.ReactNode;
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
    isInvalid,
    color,
    size: propSize,
    onOpenChange,
    defaultOpen,
    open: propOpen,
    isMultiple = false,
    helperText,
    renderValue,
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
  const [selectedLabels, setSelectedLabels] = useState<SelectionSet>(
    new Set([]),
  );

  const styles = selectVariant({
    className,
    color,
    size: propSize,
    isInvalid,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);

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

  return {
    isOpen,
    activeIndex,
    value,
    setValue,
    getItemProps,
    handleSelect,
    selectedLabel: selectedLabels,
    selectedIndex,
    setReference,
    getReferenceProps,
    context,
    setFloating,
    floatingStyles,
    elementsRef,
    labelsRef,
    getFloatingProps,
    styles,
    isMultiple,
    renderValue,
    className,
    label,
    placeholder,
    helperText,
    children,
  };
};
