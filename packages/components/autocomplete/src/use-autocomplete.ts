"use client";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";

import type {
  FloatingFocusManagerProps,
  FloatingList,
  Placement,
} from "@floating-ui/react";
import type { Input } from "@jamsrui/input";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { Autocomplete } from "./autocomplete";
import type { AutocompleteContent } from "./autocomplete-content";
import type { AutocompleteItem } from "./autocomplete-item";
import type { AutocompletePositioner } from "./autocomplete-positioner";

export const useAutocomplete = (props: useAutocomplete.Props) => {
  const {
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    placement = "bottom-start",
    isMultiple,
    ...elementProps
  } = props;

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);
  const [isFocused, setIsFocused] = useState(false);

  const [isOpen = false, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const [value = [], setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
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
      offset(2),
      flip({
        crossAxis: placement.includes("-"),
        padding: 0,
      }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(50, Math.min(400, availableHeight))}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 0,
      }),
    ],
  });

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });
  const dismiss = useDismiss(context, {
    outsidePress: true,
  });
  const role = useRole(context, { role: "listbox" });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, dismiss, role],
  );

  const handleToggleOpen = useCallback(() => {
    setIsFocused(true);
    setIsOpen((open) => !open);
  }, [setIsOpen]);

  const getRootProps: PropGetter<Autocomplete.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-component": "autocomplete",
      "data-slot": "root",
    }),
    [elementProps],
  );

  const getAutocompleteItemProps: PropGetter<AutocompleteItem.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": "item",
      }),
      [],
    );

  const getPositionerProps: PropGetter<AutocompletePositioner.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": "popover",
        style: floatingStyles,
        ...getFloatingProps({}),
        ref: setFloating,
      }),
      [floatingStyles, getFloatingProps, setFloating],
    );

  const getContentProps: PropGetter<AutocompleteContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      initialFocus: -1,
      visuallyHiddenDismiss: true,
      modal: true,
      restoreFocus: true,
    }),
    [context],
  );

  const getFloatingListProps = useCallback(
    (): Omit<ComponentProps<typeof FloatingList>, "children"> => ({
      elementsRef,
    }),
    [],
  );

  const getInputProps: PropGetter<Input.Props> = useCallback(
    (props) => ({
      ...props,
      ...getReferenceProps({}),
    }),
    [getReferenceProps, handleToggleOpen, setReference],
  );

  return useMemo(
    () => ({
      getAutocompleteItemProps,
      getRootProps,
      getInputProps,
      getContentProps,
      getPositionerProps,
      getFloatingListProps,
      getFocusManagerProps,
      isOpen,
      activeIndex,
      value,
    }),
    [
      activeIndex,
      getAutocompleteItemProps,
      getContentProps,
      getFloatingListProps,
      getFocusManagerProps,
      getInputProps,
      getPositionerProps,
      getRootProps,
      isOpen,
      value,
    ],
  );
};
export namespace useAutocomplete {
  interface InnerProps {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    placement?: Placement;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
    isMultiple?: boolean;
  }

  export interface Props
    extends Omit<Input.Props, keyof InnerProps>, InnerProps {}
}
