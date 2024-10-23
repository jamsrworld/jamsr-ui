/* eslint-disable no-plusplus */
import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { Children, useCallback, useRef, useState } from "react";
import {
  AccordionItemProvider,
  type AccordionItemRefType,
} from "./accordion-context";
import { useAccordion, type UseAccordionProps } from "./use-accordion";

export type AccordionProps = UseAccordionProps;
export type AccordionSelectionSet = Set<number>;

export const Accordion = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, AccordionProps>,
) => {
  const { Component, children, getBaseProps, selectionMode } =
    useAccordion(props);
  const [selectedKeys, setSelectedKeys] = useState<AccordionSelectionSet>(
    new Set([]),
  );
  const refs = useRef<AccordionItemRefType[]>([]);

  const handleToggle = useCallback(
    (index: number) => {
      const isOpen = selectedKeys.has(index);
      if (selectionMode === "single") {
        setSelectedKeys(isOpen ? new Set() : new Set([index]));
      } else if (selectionMode === "multiple") {
        const newKeys = new Set(selectedKeys);
        if (newKeys.has(index)) {
          newKeys.delete(index);
        } else {
          newKeys.add(index);
        }
        setSelectedKeys(newKeys);
      }
    },
    [selectedKeys, selectionMode],
  );

  const moveFocus = (currentIdx: number, direction: number) => {
    const totalLength = refs.current.length;
    const idx = (currentIdx + direction + totalLength) % totalLength;
    for (let i = 0; i < totalLength; i++) {
      const nextIdx = (idx + i * direction + totalLength) % totalLength;
      const item = refs.current[nextIdx];
      if (item && !item.isDisabled) {
        item.focus();
        return;
      }
    }
  };

  const focusNext = (currentIdx: number) => moveFocus(currentIdx, 1);

  const focusPrevious = (currentIdx: number) => moveFocus(currentIdx, -1);

  const focusFirst = () => moveFocus(-1, 1);
  const focusLast = () => moveFocus(refs.current.length - 1, -1);

  const ref = useCallback((idx: number, node: AccordionItemRefType | null) => {
    if (refs.current && node) refs.current[idx] = node;
  }, []);

  return (
    <Component {...getBaseProps()}>
      {Children.map(children, (child, index) => {
        const isOpen = selectedKeys.has(index);
        return (
          <AccordionItemProvider
            key={index}
            value={{
              isOpen,
              index,
              onFocusNext: () => focusNext(index),
              onFocusPrevious: () => focusPrevious(index),
              onToggle: () => handleToggle(index),
              onFocusFirst: () => focusFirst(),
              onFocusLast: () => focusLast(),
              ref: (node) => ref(index, node),
            }}
          >
            {child}
          </AccordionItemProvider>
        );
      })}
    </Component>
  );
};
