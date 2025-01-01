"use client";

import { useControlledState } from "@jamsr-ui/hooks";
import { cloneElement, type HTMLAttributes, useId, useMemo } from "react";
import {
  type CollapsibleContextType,
  CollapsibleProvider,
} from "./collapsible-context";

type Props = {
  children: React.ReactElement;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isDisabled?: boolean;
};

export const Collapsible = (props: Props) => {
  const {
    children,
    defaultOpen = false,
    isOpen: $isOpen,
    onOpenChange,
    isDisabled,
  } = props;
  const [isOpen, setIsOpen] = useControlledState(
    defaultOpen,
    $isOpen,
    onOpenChange,
  );
  const id = useId();
  const value: CollapsibleContextType = useMemo(
    () => ({ isOpen, setIsOpen, id, isDisabled }),
    [isOpen, setIsOpen, id, isDisabled],
  );
  return (
    <CollapsibleProvider value={value}>
      {cloneElement(children, {
        "aria-expanded": isOpen,
        "data-expanded": isOpen,
        "aria-controls": id,
      } as HTMLAttributes<HTMLDivElement>)}
    </CollapsibleProvider>
  );
};
